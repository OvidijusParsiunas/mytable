import {ColumnSizerElement} from '../../../elements/columnSizerElement/columnSizerElement';
import {CellDividerElement} from '../../../elements/cell/cellDividerElement';
import {EditableTableComponent} from '../../../editable-table-component';
import {CellElement} from '../../../elements/cell/cellElement';
import {ColumnDetails} from '../../../types/columnDetails';

export class InsertNewCell {
  // prettier-ignore
  private static insertElementsToRow(
      rowElement: HTMLElement, cellElement: HTMLElement, cellDividerElement: HTMLElement, columnIndex: number) {
    // the reason why columnIndex is multiplied by 2 is because there is a divider element after each cell
    // if child is undefined, the element is added at the end
    const childIndex = columnIndex * 2;
    rowElement.insertBefore(cellElement, rowElement.children[childIndex]);
    rowElement.insertBefore(cellDividerElement, rowElement.children[childIndex + 1]);
  }

  // prettier-ignore
  private static createColumnSizer(etc: EditableTableComponent, cellDividerElement: HTMLElement) {
    const { tableBodyElementRef, overlayElementsState: { columnSizers }, columnsDetails } = etc;
    const columnSizerElement = ColumnSizerElement.create(etc);
    cellDividerElement.appendChild(columnSizerElement);
    // WORK - need this on delete to be working correctly
    // the previous cell border no longer depends on the table border
    ColumnSizerElement.refreshSecondLastColumnSizer(columnSizers.list, columnsDetails, tableBodyElementRef as HTMLElement);
  }

  private static createDefaultColumnDetailsObject(cellElement: HTMLElement): ColumnDetails {
    return {elements: [cellElement]};
  }

  // prettier-ignore
  private static updateColumnDetailsAndSizers(etc: EditableTableComponent,
      rowIndex: number, columnIndex: number, cellElement: HTMLElement, cellDividerElement: HTMLElement) {
    if (rowIndex === 0) {
      // cannot be in a timeout as create needs it
      etc.columnsDetails.splice(columnIndex, 0, InsertNewCell.createDefaultColumnDetailsObject(cellElement));
      InsertNewCell.createColumnSizer(etc, cellDividerElement);
    } else {
      // TO-DO - not sure if all cell elements are needed, if this is not required in the future do not this code
      setTimeout(() => etc.columnsDetails[columnIndex].elements.push(cellElement));
    }
  }

  // isNewText indicates whether rowData is already in the contents state or if it needs to be added
  // prettier-ignore
  public static insertToRow(etc: EditableTableComponent,
      rowElement: HTMLElement, rowIndex: number, columnIndex: number, cellText: string, isNewText: boolean) {
    const cellElement = CellElement.createCellElement(etc, cellText, rowIndex, columnIndex);
    const cellDividerElement = CellDividerElement.create();
    InsertNewCell.insertElementsToRow(rowElement, cellElement, cellDividerElement, columnIndex);
    InsertNewCell.updateColumnDetailsAndSizers(etc, rowIndex, columnIndex, cellElement, cellDividerElement);
    // cannot plce in a timeout as etc.contents length is used to get last row index
    if (isNewText) etc.contents[rowIndex].splice(columnIndex, 0, etc.defaultCellValue);
  }
}
