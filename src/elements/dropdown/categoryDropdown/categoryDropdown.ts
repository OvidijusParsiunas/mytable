import {CategoryDropdownHorizontalScroll} from './categoryDropdownHorizontalScroll';
import {GenericElementUtils} from '../../../utils/elements/genericElementUtils';
import {EditableTableComponent} from '../../../editable-table-component';
import {CategoryDropdownItem} from './categoryDropdownItem';
import {Categories} from '../../../types/columnDetails';
import {CellDetails} from '../../../types/focusedCell';
import {Dropdown} from '../dropdown';

// TO-DO allow dev to control whether additional elements are allowed to be added
export class CategoryDropdown {
  public static hide(categoryDropdown: HTMLElement) {
    GenericElementUtils.hideElements(categoryDropdown);
  }

  private static focusItemOnDropdownOpen(textElement: HTMLElement, categoryDropdown: HTMLElement, categories: Categories) {
    categoryDropdown.style.overflow = 'hidden';
    CategoryDropdownItem.highlightMatchingCellCategoryItem(textElement, categoryDropdown, categories);
    if (!categories.categoryDropdownItems.matchingWithCellText) {
      const firstItem = categoryDropdown.children[0] as HTMLElement;
      // firing event as the handler has the hover color binded to it
      firstItem?.dispatchEvent(new MouseEvent('mouseenter'));
    }
    setTimeout(() => (categoryDropdown.style.overflow = 'auto'));
  }

  private static setPosition(categoryDropdown: HTMLElement, cellElement: HTMLElement) {
    categoryDropdown.style.left = `${cellElement.offsetLeft + cellElement.offsetWidth}px`;
    categoryDropdown.style.top = `${cellElement.offsetTop}px`;
  }

  // instead of binding click event handlers with the context of current row index to individual item elements every
  // time the dropdown is displayed, click events are handled on the dropdown instead, the reason for this is
  // because it can be expensive to rebind an arbitrary amount of items e.g. 10000+
  // prettier-ignore
  private static click(this: EditableTableComponent, dropdownElement: HTMLElement, event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    const { rowIndex, columnIndex, element: cellElement } = this.focusedCell as CellDetails;
    // when user clicks on top/bottom paddding instead of an item
    if (targetElement.classList.contains(Dropdown.DROPDOWN_CLASS)) return;
    CategoryDropdown.hide(dropdownElement);
    const itemElement = targetElement.classList.contains('dropdown-item') ? targetElement : targetElement.parentElement;
    CategoryDropdownItem.selectExistingCategory(this, itemElement as HTMLElement, rowIndex, columnIndex,
      cellElement.children[0] as HTMLElement, dropdownElement);
    delete this.focusedCategoryDropdown.element;
  }

  // prettier-ignore
  // WORK - refactor focusedCategoryDropdown
  private static mouseDown(focusedCategoryDropdown: { element?: HTMLElement }, dropdownElement: HTMLElement) {
    focusedCategoryDropdown.element = dropdownElement;
  }

  // prettier-ignore
  public static display(etc: EditableTableComponent, columnIndex: number, cellElement: HTMLElement) {
    const {categories} = etc.columnsDetails[columnIndex];
    const {list, categoryDropdownItems} = categories;
    const categoryDropdown = etc.overlayElementsState.categoryDropdown as HTMLElement;
    if (Object.keys(list).length > 0) {
      categoryDropdown.onmousedown = CategoryDropdown.mouseDown.bind(this, etc.focusedCategoryDropdown, categoryDropdown);
      categoryDropdown.onclick = CategoryDropdown.click.bind(etc, categoryDropdown);
      CategoryDropdown.setPosition(categoryDropdown, cellElement);
      CategoryDropdownItem.blurItemHighlight(categoryDropdownItems, 'hovered');
      CategoryDropdownItem.blurItemHighlight(categoryDropdownItems, 'matchingWithCellText');
      categoryDropdown.scrollLeft = 0;
      categoryDropdown.style.display = Dropdown.CSS_DISPLAY_VISIBLE;
      // REF-4
      CategoryDropdownHorizontalScroll.setPropertiesIfHorizontalScrollPresent(categoryDropdown, categoryDropdownItems);
      const textElement = cellElement.children[0] as HTMLElement;
      CategoryDropdown.focusItemOnDropdownOpen(textElement, categoryDropdown, categories);
    }
  }

  // WORK - will need to populate upfront if user has set a column as category upfront
  public static create() {
    const dropdownElement = Dropdown.createBase();
    dropdownElement.style.maxHeight = '150px';
    dropdownElement.style.overflow = 'auto';
    return dropdownElement;
  }
}
