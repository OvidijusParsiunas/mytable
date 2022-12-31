import {PaginationButtonContainerElement} from '../../elements/pagination/paginationButtonContainerElement';
import {AddNewRowElement} from '../../elements/table/addNewElements/row/addNewRowElement';
import {PaginationButtonElement} from '../../elements/pagination/paginationButtonElement';
import {EditableTableComponent} from '../../editable-table-component';
import {PaginationInternal} from '../../types/paginationInternal';
import {PaginationUpdateButtons} from './paginationUpdateButtons';
import {ExtractElements} from '../elements/extractElements';
import {Pagination} from '../../types/pagination';

export class PaginationUtils {
  private static readonly VISIBLE_ROW = '';
  private static readonly HIDDEN_ROW = 'none';

  public static getLastPossibleButtonNumber(etc: EditableTableComponent, isBeforeInsert = false) {
    const {contents, paginationInternal} = etc;
    const numberOfRows = isBeforeInsert ? contents.length : contents.length - 1;
    return Math.ceil(numberOfRows / paginationInternal.numberOfEntries);
  }

  public static getNumberButtons(buttonContainer: HTMLElement) {
    const allButtons = Array.from(buttonContainer.children) as HTMLElement[];
    const halfOfSideButtons = PaginationButtonContainerElement.NUMBER_OF_ACTION_BUTTONS / 2;
    return allButtons.slice(halfOfSideButtons, allButtons.length - halfOfSideButtons);
  }

  public static getRelativeRowIndexes(paginationInternal: PaginationInternal, rowIndex = 0) {
    const {activeButtonNumber, numberOfEntries} = paginationInternal;
    const maxVisibleRowIndex = activeButtonNumber * numberOfEntries + 1;
    const minVisibleRowIndex = maxVisibleRowIndex - numberOfEntries;
    const visibleRowIndex = rowIndex - minVisibleRowIndex;
    return {maxVisibleRowIndex, minVisibleRowIndex, visibleRowIndex};
  }

  private static updateRowsOnRemoval(etc: EditableTableComponent, rowIndex: number) {
    const {visibleRows, activeButtonNumber} = etc.paginationInternal;
    const {visibleRowIndex} = PaginationUtils.getRelativeRowIndexes(etc.paginationInternal, rowIndex);
    visibleRows.splice(visibleRowIndex, 1);
    if (visibleRows.length > 0) {
      const lastVisibleRow = visibleRows[visibleRows.length - 1];
      const nextRow = lastVisibleRow?.nextSibling as HTMLElement;
      if (nextRow && nextRow.children[0]?.id !== AddNewRowElement.ID) {
        nextRow.style.display = PaginationUtils.VISIBLE_ROW;
        visibleRows.push(nextRow);
      }
    } else if (activeButtonNumber > 1) {
      PaginationUtils.displayRowsForDifferentButton(etc, activeButtonNumber - 1);
    }
  }

  public static hideLastVisibleRow(paginationInternal: PaginationInternal) {
    const {visibleRows} = paginationInternal;
    if (visibleRows.length === 0) return;
    const lastRow = visibleRows[visibleRows.length - 1];
    lastRow.style.display = PaginationUtils.HIDDEN_ROW;
    paginationInternal.visibleRows.splice(paginationInternal.visibleRows.length - 1, 1);
  }

  private static updateRowsOnNewInsert(etc: EditableTableComponent, rowIndex: number, newRowElement: HTMLElement) {
    const {numberOfEntries, visibleRows, activeButtonNumber} = etc.paginationInternal;
    const {maxVisibleRowIndex, visibleRowIndex} = PaginationUtils.getRelativeRowIndexes(etc.paginationInternal, rowIndex);
    if (maxVisibleRowIndex > rowIndex) {
      if (visibleRows.length === numberOfEntries) PaginationUtils.hideLastVisibleRow(etc.paginationInternal);
      visibleRows.splice(visibleRowIndex, 0, newRowElement);
    } else {
      newRowElement.style.display = PaginationUtils.HIDDEN_ROW;
      // wait for a new button to be created when on last
      setTimeout(() => PaginationUtils.displayRowsForDifferentButton(etc, activeButtonNumber + 1));
    }
  }

  public static updateOnRowChange(etc: EditableTableComponent, rowIndex: number, newRowElement?: HTMLElement) {
    if (rowIndex === 0 && etc.contents.length === 0) return;
    // buttons need to be updated first as displayRowsForDifferentButton will use them to toggle the side buttons
    if (newRowElement) {
      PaginationUpdateButtons.updateOnRowInsert(etc);
      PaginationUtils.updateRowsOnNewInsert(etc, rowIndex, newRowElement);
    } else {
      PaginationUpdateButtons.updateOnRowRemove(etc);
      PaginationUtils.updateRowsOnRemoval(etc, rowIndex);
    }
  }

  public static initialRowUpdates(etc: EditableTableComponent, rowIndex: number, newRowElement: HTMLElement) {
    if (rowIndex > etc.paginationInternal.numberOfEntries) {
      newRowElement.style.display = PaginationUtils.HIDDEN_ROW;
    } else if (rowIndex > 0) {
      etc.paginationInternal.visibleRows.push(newRowElement);
    }
  }

  // prettier-ignore
  private static setCorrectRowsAsVisible(etc: EditableTableComponent, buttonNumber: number) {
    const {paginationInternal: {numberOfEntries, visibleRows}, tableBodyElementRef, contents} = etc;
    const tableRows = ExtractElements.textRowsArrFromTBody(tableBodyElementRef as HTMLElement, contents);
    const startingRowIndex = numberOfEntries * (buttonNumber - 1) + 1;
    tableRows.slice(startingRowIndex, startingRowIndex + numberOfEntries).forEach((rowElement) => {
      (rowElement as HTMLElement).style.display = PaginationUtils.VISIBLE_ROW;
      visibleRows.push(rowElement as HTMLElement);
    });
  }

  private static hideAllRows(paginationInternal: PaginationInternal) {
    paginationInternal.visibleRows.forEach((rowElement) => {
      rowElement.style.display = PaginationUtils.HIDDEN_ROW;
    });
    paginationInternal.visibleRows = [];
  }

  public static displayRowsForDifferentButton(etc: EditableTableComponent, buttonNumber: number) {
    PaginationUtils.hideAllRows(etc.paginationInternal);
    PaginationUtils.setCorrectRowsAsVisible(etc, buttonNumber);
    PaginationButtonElement.setActive(etc, etc.paginationInternal.buttonContainer as HTMLElement, buttonNumber);
  }

  public static processInternal(pagination: Pagination, paginationInternal: PaginationInternal) {
    if (pagination.maxNumberOfButtons !== undefined && pagination.maxNumberOfButtons < 1) {
      pagination.maxNumberOfButtons = 1;
    }
    Object.assign(paginationInternal, pagination);
  }

  public static getDefaultInternal(): PaginationInternal {
    return {
      numberOfEntries: 10,
      maxNumberOfButtons: 8,
      activeButtonNumber: 1,
      visibleRows: [],
      displayPrevNext: true,
      displayFirstLast: true,
    };
  }
}
