import {OverwriteCellsViaCSVOnPaste} from '../../utils/pasteCSV/overwriteCellsViaCSVOnPaste';
import {FirefoxCaretDisplayFix} from '../../utils/browser/firefox/firefoxCaretDisplayFix';
import {CategoryDropdownItem} from '../dropdown/categoryDropdown/categoryDropdownItem';
import {CellTypeTotalsUtils} from '../../utils/cellType/cellTypeTotalsUtils';
import {FocusedCellUtils} from '../../utils/focusedCell/focusedCellUtils';
import {EditableTableComponent} from '../../editable-table-component';
import {CELL_TYPE, VALIDABLE_CELL_TYPE} from '../../enums/cellType';
import {ValidateInput} from '../../utils/cellType/validateInput';
import {Browser} from '../../utils/browser/browser';
import {Dropdown} from '../dropdown/dropdown';
import {CellElement} from './cellElement';
import {CellEvents} from './cellEvents';

export class DataCellEvents {
  private static readonly PASTE_INPUT_TYPE = 'insertFromPaste';
  private static readonly TEXT_DATA_FORMAT = 'text/plain';
  private static readonly INVALID_TEXT_COLOR = 'grey';
  private static readonly DEFAULT_TEXT_COLOR = '';

  // prettier-ignore
  private static setTextColorBasedOnValidity(cellElement: HTMLElement, userSetColumnType: VALIDABLE_CELL_TYPE) {
    cellElement.style.color = ValidateInput.validate(cellElement.textContent as string, userSetColumnType)
      ? DataCellEvents.DEFAULT_TEXT_COLOR : DataCellEvents.INVALID_TEXT_COLOR;
  }

  // TO-DO default types per column, cleanup e.g. currency or date will need to be provided by user
  // TO-DO allow user to set default as invalid
  // using this instead of keydown is because when this is fired the new cell text is available
  // prettier-ignore
  private static inputCell(this: EditableTableComponent, rowIndex: number, columnIndex: number, event: Event) {
    const inputEvent = event as InputEvent;
    const cellElement = inputEvent.target as HTMLElement;
    CellElement.processAndSetTextOnCell(cellElement, cellElement.textContent as string, false);
    const categoryDropdown = this.overlayElementsState.categoryDropdown as HTMLElement;
    const columnDetails = this.columnsDetails[columnIndex];
    if (inputEvent.inputType !== DataCellEvents.PASTE_INPUT_TYPE) {
      const userSetColumnType = columnDetails.userSetColumnType as keyof typeof VALIDABLE_CELL_TYPE;
      if (VALIDABLE_CELL_TYPE[userSetColumnType]) {
        DataCellEvents.setTextColorBasedOnValidity(cellElement, userSetColumnType);
      } else if (Dropdown.isDisplayed(categoryDropdown)) {
        CategoryDropdownItem.focusMatchingCellCategoryItem(cellElement.textContent as string,
          categoryDropdown, columnDetails.categories.categoryDropdownItems);
      }
      CellEvents.updateCell(this, cellElement.textContent as string, rowIndex, columnIndex, {processText: false});
    }
  }

  // WORK - add category on paste
  private static pasteCell(this: EditableTableComponent, rowIndex: number, columnIndex: number, event: ClipboardEvent) {
    const clipboardText = JSON.stringify(event.clipboardData?.getData(DataCellEvents.TEXT_DATA_FORMAT));
    if (OverwriteCellsViaCSVOnPaste.isCSVData(clipboardText)) {
      OverwriteCellsViaCSVOnPaste.overwrite(this, clipboardText, event, rowIndex, columnIndex);
    } else {
      const cellElement = event.target as HTMLElement;
      setTimeout(() => {
        CellEvents.updateCell(this, cellElement.textContent as string, rowIndex, columnIndex, {processText: false});
      });
    }
  }

  protected static blur(this: EditableTableComponent, rowIndex: number, columnIndex: number, event: Event) {
    // can be cell element from this class or text element from categoryCellEvents class
    const textContainerElement = event.target as HTMLElement;
    if (Browser.IS_FIREFOX) FirefoxCaretDisplayFix.removeContentEditable(textContainerElement);
    CellEvents.setCellToDefaultIfNeeded(this, rowIndex, columnIndex, textContainerElement);
    textContainerElement.style.color = DataCellEvents.DEFAULT_TEXT_COLOR;
    const oldType = this.focusedCell.type as CELL_TYPE;
    setTimeout(() => {
      const newType = CellTypeTotalsUtils.parseType(textContainerElement.textContent as string, this.defaultCellValue);
      CellTypeTotalsUtils.changeCellTypeAndSetNewColumnType(this.columnsDetails[columnIndex], oldType, newType);
    });
  }

  protected static prepareCell(this: EditableTableComponent, rowIndex: number, columnIndex: number, event: Event) {
    // can be cell element from this class or text element from categoryCellEvents class
    const textContainerElement = event.target as HTMLElement;
    if (Browser.IS_FIREFOX) FirefoxCaretDisplayFix.setContentEditable(textContainerElement, rowIndex);
    // placed here and not in timeout because we need cells with a default value to be recorded before modification
    CellEvents.removeTextIfDefault(this, rowIndex, columnIndex, textContainerElement);
  }

  private static focusCell(this: EditableTableComponent, rowIndex: number, columnIndex: number, event: FocusEvent) {
    const cellElement = event.target as HTMLElement;
    DataCellEvents.prepareCell.bind(this)(rowIndex, columnIndex, event);
    FocusedCellUtils.set(this.focusedCell, cellElement, rowIndex, columnIndex, this.defaultCellValue);
  }

  public static set(etc: EditableTableComponent, cellElement: HTMLElement, rowIndex: number, columnIndex: number) {
    cellElement.onfocus = DataCellEvents.focusCell.bind(etc, rowIndex, columnIndex);
    cellElement.onblur = DataCellEvents.blur.bind(etc, rowIndex, columnIndex);
    cellElement.oninput = DataCellEvents.inputCell.bind(etc, rowIndex, columnIndex);
    cellElement.onpaste = DataCellEvents.pasteCell.bind(etc, rowIndex, columnIndex);
  }
}
