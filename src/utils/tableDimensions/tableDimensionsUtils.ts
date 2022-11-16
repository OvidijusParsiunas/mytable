import {TableDimensionsInternal} from '../../types/tableDimensionsInternal';
import {MaxStructureDimensions} from '../../types/maxStructureDimensions';
import {EditableTableComponent} from '../../editable-table-component';
import {TableDimensions} from '../../types/tableDimensions';
import {PropertiesOfType} from '../../types/utilityTypes';
import {ColumnsDetailsT} from '../../types/columnDetails';
import {TableContents} from '../../types/tableContents';
import {StringDimension} from '../../types/dimensions';
import {RegexUtils} from '../regex/regexUtils';

export class TableDimensionsUtils {
  public static readonly MINIMAL_TABLE_WIDTH = 70;

  // REF-19
  // prettier-ignore
  private static setIsColumnIndexCellTextWrapped(tableDimensions: TableDimensions,
      tableDimensionsInternal: TableDimensionsInternal, displayIndexColumn: boolean) {
    if (displayIndexColumn) { 
      if (tableDimensions.wrapIndexCellText) {
        tableDimensionsInternal.isColumnIndexCellTextWrapped = true;
      } else if (tableDimensionsInternal.isColumnIndexCellTextWrapped === undefined) {
        tableDimensionsInternal.isColumnIndexCellTextWrapped = false;
      }
    }
  }

  // prettier-ignore
  private static setMaxStructureDimension(tableDimensions: TableDimensions,
      tableDimensionsInternal: TableDimensionsInternal, maxKey: keyof MaxStructureDimensions) {
    if (tableDimensions[maxKey] !== undefined) {
      tableDimensionsInternal[maxKey] = tableDimensions[maxKey] || 1;
    }
  }

  // prettier-ignore
  private static setMaxStructureDimensions(tableDimensions: TableDimensions,
      tableDimensionsInternal: TableDimensionsInternal) {
    TableDimensionsUtils.setMaxStructureDimension(tableDimensions, tableDimensionsInternal, 'maxColumns');
    TableDimensionsUtils.setMaxStructureDimension(tableDimensions, tableDimensionsInternal, 'maxRows');
  }

  // prettier-ignore
  private static setPreserveNarrowColumnsProp(tableDimensions: TableDimensions,
      tableDimensionsInternal: TableDimensionsInternal) {
    tableDimensionsInternal.preserveNarrowColumns = tableDimensions.preserveNarrowColumns === undefined
      ? true : tableDimensions.preserveNarrowColumns;
  }

  private static setDefaultDimension(tableDimensionsInternal: TableDimensionsInternal, parentElement: HTMLElement) {
    // 100% width of the parent element
    tableDimensionsInternal.maxWidth = parentElement.offsetWidth;
    tableDimensionsInternal.isPercentage = true;
  }

  private static processDimension(width: number) {
    return width < TableDimensionsUtils.MINIMAL_TABLE_WIDTH ? TableDimensionsUtils.MINIMAL_TABLE_WIDTH : width;
  }

  private static isParentWidthUndetermined(width: string) {
    return width === 'fit-content' || width === 'min-content' || width === 'max-content';
  }

  private static setDimension(etc: EditableTableComponent, key: keyof PropertiesOfType<TableDimensions, StringDimension>) {
    const {tableDimensions, tableDimensionsInternal, tableElementRef, parentElement} = etc;
    if (!tableElementRef || !parentElement) return;
    const clientValue = tableDimensions[key] as string | number;
    const isClientValueStr = typeof clientValue === 'string';
    // parse string or accept the passed in number as px
    let extractedNumber = isClientValueStr ? Number(RegexUtils.extractIntegerStrs(clientValue)[0]) : clientValue;
    if (isClientValueStr && clientValue.includes('%')) {
      // if true then holds an unlimited size via table-controlled-width class (dynamic table)
      if (TableDimensionsUtils.isParentWidthUndetermined(parentElement.style.width)) return;
      if (extractedNumber > 100) extractedNumber = 100;
      const width = parentElement.offsetWidth * (extractedNumber / 100);
      tableDimensionsInternal[key] = TableDimensionsUtils.processDimension(width);
      tableDimensionsInternal.isPercentage = true;
    } else {
      tableDimensionsInternal[key] = TableDimensionsUtils.processDimension(extractedNumber);
    }
  }

  // CAUTION-3
  public static setInternalTableDimensions(etc: EditableTableComponent) {
    const {tableDimensions, tableDimensionsInternal, displayIndexColumn} = etc;
    const parentElement = etc.parentElement as HTMLElement;
    // width and maxWidth are mutually exclusive and if both are present width is the only one that is used
    if (tableDimensions.width !== undefined) {
      TableDimensionsUtils.setDimension(etc, 'width');
    } else if (tableDimensions.maxWidth !== undefined) {
      TableDimensionsUtils.setDimension(etc, 'maxWidth');
    } else if (
      !tableDimensions.unlimitedSize &&
      !TableDimensionsUtils.isParentWidthUndetermined(parentElement.style.width)
    ) {
      TableDimensionsUtils.setDefaultDimension(tableDimensionsInternal, parentElement);
    }
    // else the table automatically holds an unlimited size via table-controlled-width class (dynamic table)
    TableDimensionsUtils.setPreserveNarrowColumnsProp(tableDimensions, tableDimensionsInternal);
    TableDimensionsUtils.setMaxStructureDimensions(tableDimensions, tableDimensionsInternal);
    TableDimensionsUtils.setIsColumnIndexCellTextWrapped(tableDimensions, tableDimensionsInternal, displayIndexColumn);
  }

  public static cleanupContentsThatDidNotGetAdded(contents: TableContents, columnsDetails: ColumnsDetailsT) {
    if (contents[0]?.length - columnsDetails.length > 0) contents.forEach((row) => row.splice(columnsDetails.length));
    if (contents.length > columnsDetails[0]?.elements.length) contents.splice(columnsDetails[0].elements.length);
  }

  public static hasSetTableWidthBeenBreached(etc: EditableTableComponent) {
    const {width, maxWidth, preserveNarrowColumns} = etc.tableDimensionsInternal;
    if (preserveNarrowColumns) {
      const tableOffset = etc.offsetWidth;
      const setWidth = width || maxWidth;
      if (setWidth) {
        return setWidth < tableOffset;
      }
    }
    return false;
  }
}
