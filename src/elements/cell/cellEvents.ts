import {DataUtils} from '../../utils/insertRemoveStructure/shared/dataUtils';
import {EditableTableComponent} from '../../editable-table-component';
import {CELL_UPDATE_TYPE} from '../../enums/onUpdateCellType';
import {CellText} from '../../types/tableContents';
import {EMPTY_STRING} from '../../consts/text';
import {CellElement} from './cellElement';

// operates in an opt in or out basis for various operations
interface UpdateCellOptions {
  // opt in
  element?: HTMLElement;
  // opt out
  updateTableEvent?: boolean;
  processText?: boolean;
  updateContents?: boolean;
}

export class CellEvents {
  private static executeUpdateOpration(operation: keyof UpdateCellOptions, options?: UpdateCellOptions) {
    return options?.[operation] === undefined || options[operation] === true;
  }

  // this is mostly handled by operations that do not insert new cells as those handle the instructions below
  // in a different order asynchronously for maximum efficiency
  // prettier-ignore
  public static updateCell(etc: EditableTableComponent,
      cellText: CellText, rowIndex: number, columnIndex: number, options?: UpdateCellOptions) {
    if (CellEvents.executeUpdateOpration('processText', options)) {
      cellText = DataUtils.processCellText(etc, rowIndex, columnIndex, cellText); 
    }
    if (CellEvents.executeUpdateOpration('updateContents', options)) etc.contents[rowIndex][columnIndex] = cellText; 
    if (options?.element) CellElement.processAndSetTextOnCell(etc, options.element, cellText, false); // CAUTION-1
    if (CellEvents.executeUpdateOpration('updateTableEvent', options)) etc.onTableUpdate(etc.contents);
    // not in timeout as functionality that calls updateCell calls etc.onTableUpdate after - should remain that way
    etc.onCellUpdate(cellText, rowIndex, columnIndex, CELL_UPDATE_TYPE.UPDATE);
    return cellText;
  }

  // this is used for cases where updateCell should only be called if it has to be set to default
  // prettier-ignore
  public static setCellToDefaultIfNeeded(etc: EditableTableComponent,
      rowIndex: number, columnIndex: number, textContainerElement: HTMLElement, updateTableEvent = true): boolean {
    const cellText = CellElement.getText(textContainerElement);
    const processedCellText = DataUtils.processCellText(etc, rowIndex, columnIndex, cellText);
    if (processedCellText !== cellText) {
       // if pointer problems start occuring, .getText() and processCellText are trimming the <br> element
      CellEvents.updateCell(etc, processedCellText, rowIndex, columnIndex,
        { element: textContainerElement, processText: false, updateTableEvent }); 
      return true;
    }
    return false;
  }

  // TO-DO allow the user to disable this feature and allow default elements to be categories
  // prettier-ignore
  public static removeTextIfDefault(etc: EditableTableComponent,
      rowIndex: number, columnIndex: number, textContainerElement: HTMLElement) {
    const {defaultText} = etc.columnsDetails[columnIndex].settings;
    if (defaultText !== EMPTY_STRING && defaultText === CellElement.getText(textContainerElement)) {
      CellEvents.updateCell(etc, EMPTY_STRING, rowIndex, columnIndex,
        { element: textContainerElement, processText: false });
    }
  }
}
