import {DateCellElement} from './elements/cell/cellsWithTextDiv/dateCell/dateCellElement';
import {UserKeyEventsStateUtil} from './utils/userEventsState/userEventsStateUtil';
import {OverlayElementsState} from './utils/overlayElements/overlayElementsState';
import {FocusedElementsUtils} from './utils/focusedElements/focusedElementsUtils';
import {TableDimensionsInternal, TableDimensions} from './types/tableDimensions';
import {LITElementTypeConverters} from './utils/LITElementTypeConverters';
import {TableElementEventState} from './types/tableElementEventState';
import {customElement, property, state} from 'lit/decorators.js';
import {ediTableStyle} from './editable-table-component-style';
import {WindowElement} from './elements/window/windowElement';
import {UserKeyEventsState} from './types/userKeyEventsState';
import {UserSetColumnSizerStyle} from './types/columnSizer';
import {TableElement} from './elements/table/tableElement';
import {CELL_UPDATE_TYPE} from './enums/onUpdateCellType';
import {ParentResize} from './utils/render/parentResize';
import {OverlayElements} from './types/overlayElements';
import {FocusedElements} from './types/focusedElements';
import {HoveredElements} from './types/hoveredElements';
import {ColumnsDetailsT} from './types/columnDetails';
import {TableContents} from './types/tableContents';
import {Render} from './utils/render/render';
import {CSSStyle} from './types/cssStyle';
import {LitElement} from 'lit';

// TO-DO
// column validation: potentially highlight what is failing validation in red and display what the problem is upon hover
// rename file name from using hyphen case to camel

// spellcheck can be enabled or disabled by the user - enabled by default
// new row or column buttons can be made optional
@customElement('editable-table-component')
export class EditableTableComponent extends LitElement {
  static override styles = [ediTableStyle];

  public static ELEMENT_TAG = 'EDITABLE-TABLE-COMPONENT';

  @property({type: Array})
  // TO-DO must fill rows that don't have all columns
  contents: TableContents = [
    ['R', 'G', 'B', 'Color'],
    [255, 0, 0, 'Red'],
    [254, 0, 0, 'Red'],
    [0, 255, 0, 'Green'],
    [0, 254, 0, 'Green'],
  ];

  // check if types for this work
  @property({converter: LITElementTypeConverters.convertToFunction})
  onCellUpdate: (newText: string, cellRowIndex: number, cellColumnIndex: number, updateType: CELL_UPDATE_TYPE) => void =
    () => {};

  @property({converter: LITElementTypeConverters.convertToFunction})
  onTableUpdate: (newTableContents: TableContents) => void = () => {};

  @property({
    type: Boolean,
    converter: LITElementTypeConverters.convertToBoolean,
  })
  areHeadersEditable = true;

  // TO-DO make sure this works when pasting into the header will be allowed
  @property({
    type: Boolean,
    converter: LITElementTypeConverters.convertToBoolean,
  })
  duplicateHeadersAllowed = true;

  // this contains all cell elements, if there is a need to access cell elements outside the context of columns
  // create an entirely new state object and access elements from there as we don't want to store all elements
  // multiple times, and use this instead for data exclusively on columns, such as width etc.
  @state()
  columnsDetails: ColumnsDetailsT = [];

  @property({type: String})
  defaultCellValue = '';

  @state()
  tableElementRef: HTMLElement | null = null;

  @state()
  tableElementEventState: TableElementEventState = {};

  @state()
  tableBodyElementRef: HTMLElement | null = null;

  @state()
  focusedElements: FocusedElements = FocusedElementsUtils.createEmpty();

  @state()
  hoveredElements: HoveredElements = {};

  @state()
  overlayElementsState: OverlayElements = OverlayElementsState.createNew();

  @state()
  userKeyEventsState: UserKeyEventsState = UserKeyEventsStateUtil.createNew();

  // REF-15 - to be used by the client
  // TO-DO height - keep in mind that by resizing columns - the height can change
  @property({type: Object})
  tableDimensions: TableDimensions = {};

  // REF-15 - to be used internally
  @state()
  tableDimensionsInternal: TableDimensionsInternal = {recordedParentWidth: 0};

  @property({type: Object})
  tableStyle: CSSStyle = {};

  @property({type: Object})
  headerStyle: CSSStyle = {};

  @property({type: Object})
  cellStyle: CSSStyle = {};

  // columnResizer for the client - columnSizer in code for efficiency
  @property({type: Object})
  columnResizerStyle: UserSetColumnSizerStyle = {};

  @property({type: Boolean})
  displayAddRowCell = true;

  // this is triggered twice on startup in Firefox
  override render() {
    Render.renderTable(this);
    this.onTableUpdate(this.contents);
    new ResizeObserver(ParentResize.resizeCallback.bind(this)).observe(this.parentElement as HTMLElement);
  }

  override connectedCallback() {
    super.connectedCallback();
    const tableElement = TableElement.createBase(this);
    TableElement.addAuxiliaryElements(this, tableElement, this.overlayElementsState, this.areHeadersEditable);
    this.shadowRoot?.appendChild(tableElement);
    WindowElement.setEvents(this);
    this.onTableUpdate(this.contents);
    DateCellElement.populateDefaultDateTypes();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'editable-table-component': EditableTableComponent;
  }
}

// if using raw javascript, this is a direction to help move away from using render
// the initial values should be fetched in connectedCallBack (or set to default) and their changes can be observed in
// MutationObserver, this would also save callback and boolean changes from having to re-render the screen

// @state()
// observer = new MutationObserver(function (mutations) {
//   mutations.forEach(function (mutation) {
//     if (mutation.attributeName === 'contents') {
//       console.log(mutation);
//       console.log('attributes changed');
//     }
//   });
// });

// override connectedCallback() {
//   super.connectedCallback();
//   this.observer.observe(this, {
//     attributes: true, //configure it to listen to attribute changes
//   });
