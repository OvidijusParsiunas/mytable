import {StaticTableWidthColumnSizerEvents} from '../../utils/staticTableWidthsUtils/staticTableWidthColumnSizerEvents';
import {ColumnsDetailsT, ColumnSizerT} from '../../types/columnDetails';
import {EditableTableComponent} from '../../editable-table-component';
import {ColumnSizerElementOverlay} from './columnSizerElementOverlay';
import {ColumnSizerEventsUtils} from './columnSizerEventsUtils';
import {TableDimensions} from '../../types/tableDimensions';
import {ColumnSizerElement} from './columnSizerElement';
import {Browser} from '../../utils/browser/browser';
import {PX} from '../../types/pxDimension';

export type ColumnSizerMoveFunc = (
  selectedColumnSizer: HTMLElement,
  columnsDetails: ColumnsDetailsT,
  newXMovement: number,
  etc: EditableTableComponent
) => void;

export class ColumnSizerEvents {
  private static readonly MOUSE_PASSTHROUGH_TIME_ML = 50;

  private static hideWhenCellNotHovered(columnSizer: ColumnSizerT, wasHovered: boolean) {
    if (columnSizer.isSideCellHovered) return;
    if (wasHovered) {
      ColumnSizerElement.hideAfterBlurAnimation(columnSizer.element);
    } else {
      ColumnSizerElement.hide(columnSizer.element);
    }
  }

  private static hideColumnSizer(columnSizer: ColumnSizerT) {
    if (!columnSizer) return;
    columnSizer.isSideCellHovered = false;
    // when hovering over a column sizer and quickly move out of it through the cell and out of the cell we need to know if
    // the sizer was hovered, because columnSizer.isMouseHovered can be set to false before this is called, need another
    // way to figure out if the cell was hovered, hence the following method looks at its element style
    // the reason why this is before timeout is because we want to get this information asap
    const isHovered = ColumnSizerElement.isHovered(columnSizer.element);
    setTimeout(() => {
      // check if mouse has not left the cell for the column sizer
      if (!columnSizer.isSizerHovered) {
        ColumnSizerEvents.hideWhenCellNotHovered(columnSizer, isHovered);
      }
    });
  }

  public static cellMouseLeave(columnsDetails: ColumnsDetailsT, columnIndex: number) {
    ColumnSizerEvents.hideColumnSizer(columnsDetails[columnIndex - 1]?.columnSizer);
    ColumnSizerEvents.hideColumnSizer(columnsDetails[columnIndex]?.columnSizer);
  }

  private static displayColumnSizer(columnSizer: ColumnSizerT, height: PX) {
    if (!columnSizer) return;
    ColumnSizerElement.display(columnSizer.element, height);
    columnSizer.isSideCellHovered = true;
  }

  public static cellMouseEnter(columnsDetails: ColumnsDetailsT, columnIndex: number, event: MouseEvent) {
    const headerCellElement = event.target as HTMLElement;
    const height: PX = `${headerCellElement.offsetHeight}px`;
    ColumnSizerEvents.displayColumnSizer(columnsDetails[columnIndex - 1]?.columnSizer, height);
    ColumnSizerEvents.displayColumnSizer(columnsDetails[columnIndex]?.columnSizer, height);
  }

  // prettier-ignore
  public static mouseMove(selectedColumnSizer: HTMLElement,
      columnSizer: ColumnSizerT, newXMovement: number, headerCell: HTMLElement) {
    ColumnSizerElement.unsetTransitionTime(columnSizer.element);
    ColumnSizerEventsUtils.changeElementWidth(headerCell, newXMovement);
    // if the header cell size increases or decreases as the width is changed
    // the reason why it is set in a timeout is in order to try to minimize the upfront operations for performance
    setTimeout(() => (selectedColumnSizer.style.height = `${headerCell.offsetHeight}px`));
  }

  // prettier-ignore
  private static mouseMoveStaticTableWidthFunc(selectedColumnSizer: HTMLElement,
      columnsDetails: ColumnsDetailsT, newXMovement: number, etc: EditableTableComponent) {
    const { columnSizer, headerCell, sizerNumber } = ColumnSizerEventsUtils.getSizerDetailsViaElementId(
      selectedColumnSizer.id, columnsDetails);
    ColumnSizerEvents.mouseMove(selectedColumnSizer, columnSizer, newXMovement, headerCell);
    StaticTableWidthColumnSizerEvents.changeNextColumnSize(etc, columnsDetails[sizerNumber + 1], newXMovement,
      columnSizer.siblingCellsTotalWidth as number, headerCell as HTMLElement);
  }

  // prettier-ignore
  private static mouseMoveDynamicTableWidthFunc(
      selectedColumnSizer: HTMLElement, columnsDetails: ColumnsDetailsT, newXMovement: number) {
    const { columnSizer, headerCell } = ColumnSizerEventsUtils.getSizerDetailsViaElementId(
      selectedColumnSizer.id, columnsDetails);
    ColumnSizerEvents.mouseMove(selectedColumnSizer, columnSizer, newXMovement, headerCell);
  }

  // the reason why table events are used to track mouse move events on column sizers is because otherwise when the mouse
  // moves quickly - it can leave the column sizer and events would stop firing
  // the reason why there are two different functions for whether the table width is dynamic or not is because if the width
  // is static we need to change the width of the next column without changing the width of the table and setting the cb
  // directly will reduce the amount of if statements that need to be performed when the event triggers it
  public static getTableMouseMoveFunc(tableDimensions: TableDimensions): ColumnSizerMoveFunc {
    // REF-11
    return tableDimensions.width || Browser.IS_SAFARI
      ? ColumnSizerEvents.mouseMoveStaticTableWidthFunc
      : ColumnSizerEvents.mouseMoveDynamicTableWidthFunc;
  }

  public static tableOnMouseDown(etc: EditableTableComponent, selectedColumnSizer: HTMLElement, customColor?: string) {
    ColumnSizerElement.setColors(selectedColumnSizer, customColor || ColumnSizerElement.MOUSE_DOWN_COLOR);
    ColumnSizerElementOverlay.setMouseDownColor(selectedColumnSizer.children[0] as HTMLElement);
    ColumnSizerElement.unsetTransitionTime(selectedColumnSizer);
    // REF-11
    if (etc.tableDimensions.width || Browser.IS_SAFARI) {
      StaticTableWidthColumnSizerEvents.setPreResizeSiblingCellsTotalWidth(etc.columnsDetails, selectedColumnSizer);
    }
  }

  // the following method allows us to track when the user stops dragging mouse even when not on the column sizer
  // prettier-ignore
  public static tableOnMouseUp(
      selectedColumnSizer: HTMLElement, columnsDetails: ColumnsDetailsT, target: HTMLElement, customColor?: string) {
    // resetting the mouse down properties
    ColumnSizerElementOverlay.setDefaultColor(selectedColumnSizer.children[0] as HTMLElement, customColor);
    const {columnSizer} = ColumnSizerEventsUtils.getSizerDetailsViaElementId(selectedColumnSizer.id, columnsDetails);
    // if mouse up on a different element
    if (target !== selectedColumnSizer) {
      ColumnSizerElement.setTransitionTime(selectedColumnSizer);
      ColumnSizerElement.setDefaultProperties(selectedColumnSizer, columnSizer.styles.default.width);
      ColumnSizerElement.setPropertiesAfterBlurAnimation(selectedColumnSizer, columnSizer.styles.default.backgroundImage);
      ColumnSizerElement.hideAfterBlurAnimation(columnSizer.element);
    } else {
      ColumnSizerElement.setColors(selectedColumnSizer, customColor || ColumnSizerElement.DEFAULT_COLOR);
      // the reason why this is in a timeout is to allow the colors to be set to hover without a transition so the overlay
      // does not stand out on mouse up
      setTimeout(() => ColumnSizerElement.setTransitionTime(selectedColumnSizer));
    }
  }

  // in addition to the above method, the following allows us to track when the mouse has left the table
  public static tableOnMouseLeave(selectedColumnSizer: HTMLElement, columnsDetails: ColumnsDetailsT) {
    const {columnSizer} = ColumnSizerEventsUtils.getSizerDetailsViaElementId(selectedColumnSizer.id, columnsDetails);
    ColumnSizerElement.setTransitionTime(selectedColumnSizer);
    ColumnSizerElement.setDefaultProperties(selectedColumnSizer, columnSizer.styles.default.width);
    ColumnSizerElement.setPropertiesAfterBlurAnimation(selectedColumnSizer, columnSizer.styles.default.backgroundImage);
  }

  // prettier-ignore
  public static sizerOnMouseEnter(this: EditableTableComponent, columnSizer: ColumnSizerT) {
    columnSizer.isSizerHovered = true;
    // if selected and hovered over another
    if (this.tableElementEventState.selectedColumnSizer) return;
    ColumnSizerElement.setHoverProperties(
      columnSizer.element, columnSizer.styles.hover.width, this.columnResizerStyle.hover?.backgroundColor);
    // only remove the background image if the user is definitely hovering over it
    setTimeout(() => {
      if (columnSizer.isSizerHovered) ColumnSizerElement.unsetBackgroundImage(columnSizer.element);
    }, ColumnSizerEvents.MOUSE_PASSTHROUGH_TIME_ML);
  }

  // prettier-ignore
  public static sizerOnMouseLeave(this: EditableTableComponent, columnSizer: ColumnSizerT) {
    columnSizer.isSizerHovered = false;
    // mouse leave can occur when mouse is moving and column sizer is selected, hence this prevents setting to default
    if (!this.tableElementEventState.selectedColumnSizer) {
      ColumnSizerElement.setDefaultProperties(columnSizer.element, columnSizer.styles.default.width);
    }
    // when leaving the table, the last sizer can be hovered, hence the following is used to hide it because
    // columnSizer.isMouseHovered can be set to false before this is called, need another way to figure out
    // if the cell was hovered, following method looks at its element style to see if it was highlighted
    // the reason why this is before timeout is because we want to get this information asap
    const isHovered = ColumnSizerElement.isHovered(columnSizer.element);
    // only reset if the user is definitely not hovering over it
    setTimeout(() => {
      if (!this.tableElementEventState.selectedColumnSizer && !columnSizer.isSizerHovered) {
        ColumnSizerElement.setPropertiesAfterBlurAnimation(columnSizer.element,
          columnSizer.styles.default.backgroundImage);
        ColumnSizerEvents.hideWhenCellNotHovered(columnSizer, isHovered);
      }
    }, ColumnSizerEvents.MOUSE_PASSTHROUGH_TIME_ML);
  }
}
