import {ColumnDropdownSettings} from './columnDropdownSettings';
import {InterfacesUnion, SetRequired} from './utilityTypes';
import {ColumnTypesInternal} from './columnTypeInternal';
import {CustomColumnSettings} from './columnsSettings';
import {NoDimensionCSSStyle} from './cssStyle';
import {StringDimension} from './dimensions';

// to be used internally

type TransformedClientProps = Omit<
  SetRequired<
    CustomColumnSettings<NoDimensionCSSStyle>,
    'defaultText' | 'isDefaultTextRemovable' | 'isCellTextEditable' | 'isHeaderTextEditable' | 'isResizable'
  >,
  'headerName'
>;

// REF-36, REF-24
// if dimension is a percentage - will use the table width
// if total custom columns width is higher than the width in tableStyle, they will breach that width
// can only be either static width or initial width
export type ColumnWidthsI = InterfacesUnion<{staticWidth: StringDimension} | {initialWidth: StringDimension}>;

// encapsulating ColumnWidthsI within the widths property in order for default settings to not simply override custom ones
// placed inside a WidthsI type to allow settings which don't have other properties to still use it
export interface WidthsI {
  widths?: ColumnWidthsI;
}

export type ColumnSettingsInternal = TransformedClientProps & {
  dropdown: ColumnDropdownSettings;
  // encompasses processed types available for the column
  // the reason why this is here is because this is processed once and settings is then added to column details
  types: ColumnTypesInternal;
  // REF-23
  stylePrecedence?: boolean;
} & WidthsI;

// the benefits of this over the client provided array is that settings can be accessed immediately when
// cell text is known instead of traversing an array.
export type ColumnsSettingsMap = {
  [key: string]: ColumnSettingsInternal;
};
