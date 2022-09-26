import {OverwriteCellsViaCSVOnPaste} from '../../utils/pasteCSV/overwriteCellsViaCSVOnPaste';
import {CellTypeTotalsUtils} from '../../utils/cellTypeTotals/cellTypeTotalsUtils';
import {FocusedCellUtils} from '../../utils/focusedCell/focusedCellUtils';
import {EditableTableComponent} from '../../editable-table-component';
import {CELL_TYPE} from '../../enums/cellType';
import {CellEvents} from './cellEvents';

export class DataCellEvents {
  private static readonly PASTE_INPUT_TYPE = 'insertFromPaste';
  private static readonly TEXT_DATA_FORMAT = 'text/plain';

  private static inputCell(this: EditableTableComponent, rowIndex: number, columnIndex: number, event: Event) {
    const inputEvent = event as InputEvent;
    if (inputEvent.inputType !== DataCellEvents.PASTE_INPUT_TYPE) {
      const cellElement = inputEvent.target as HTMLElement;
      CellEvents.updateCell(this, cellElement.textContent as string, rowIndex, columnIndex);
    }
  }

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

  // prettier-ignore
  private static blurCell(this: EditableTableComponent, rowIndex: number, columnIndex: number, event: FocusEvent) {
    const cellElement = event.target as HTMLElement;
    CellEvents.setCellToDefaultIfNeeded(this, rowIndex, columnIndex, cellElement);
    setTimeout(() => {
      const newType = CellTypeTotalsUtils.parseType(cellElement.textContent as string, this.defaultCellValue);
      CellTypeTotalsUtils.changeCellTypeAndSetNewColumnType(
        this.columnsDetails[columnIndex], this.focusedCell.type as CELL_TYPE, newType);
    });
  }

  private static focusCell(this: EditableTableComponent, rowIndex: number, columnIndex: number, event: FocusEvent) {
    const cellElement = event.target as HTMLElement;
    // placed here and not in timeout because we need cells with a default value to be recorded before modification
    FocusedCellUtils.setDataCell(this.focusedCell, cellElement, columnIndex, this.defaultCellValue);
    CellEvents.removeTextIfCellDefault(this, rowIndex, columnIndex, event);
  }

  public static set(etc: EditableTableComponent, cellElement: HTMLElement, rowIndex: number, columnIndex: number) {
    cellElement.oninput = DataCellEvents.inputCell.bind(etc, rowIndex, columnIndex);
    cellElement.onpaste = DataCellEvents.pasteCell.bind(etc, rowIndex, columnIndex);
    cellElement.onblur = DataCellEvents.blurCell.bind(etc, rowIndex, columnIndex);
    cellElement.onfocus = DataCellEvents.focusCell.bind(etc, rowIndex, columnIndex);
  }
}
