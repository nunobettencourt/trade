export type ApiResponse = Record<string, any>;

export enum currentItemActionTypes {
	FETCH_REQUEST = '@@currentitem/FETCH_REQUEST',
	FETCH_SUCCESS = '@@currentitem/FETCH_SUCCESS',
	FETCH_ERROR = '@@currentitem/FETCH_ERROR',
	SELECTED = '@@currentitem/SELECTED',
}

/**
 * This models the value of the pre-match and inplay margins.
 * The most specific margin will be the one applied.
 * @param {float} own - if set to 'null' the 'inherited' value will be applied
 * 						(or the default if no inherited one is available). If not 'null',
 * 						this will override any margin value from its ancestry.
 * @param {float} inherited - if not 'null' and 'own' is 'null', this value will be used.
 */
export interface MarginVal {
	own: null | number;
	inherited: null | number;
}

/**
 * This models the display state.
 * When the 'inherited' property is null, the value of 'own' will be applied.
 * @param {boolean} own - when 'true' the element can be displayed
 * @param {null|string|int} inherited - a value is present when an ancestor has Displayed set to False,
 * in which case the value is the ID of the closest ancestor overruling the Display state. If no ancestor has
 * Displayed set to No, we leave it null and we use the 'own' property to decide whether the item can be dislayed.
 */
export interface DispVal {
	own: boolean;
	inherited: null | string | number;
}

/**
 * This is the schema for a margin item. It represnts data displayed in a row in the main content area.
 * We use a dynamic value as the key and this could be a string (for sport, ie: 'FOOT')
 * or an int (for class, ie: 12345), for such reason we use the most encompassing type of the two.
 * @param {string} name - the element name
 * @param {object} [pre] - the MarginVal instance for pre-match
 * @param {object} [live] - the MarginVal instance for inplay
 * @param {object} displayed - the DispVal instance for the element
 */
export interface MarginItem {
	[id: string]: {
		name: string;
		pre?: MarginVal;
		live?: MarginVal;
		displayed: DispVal;
	};
}

/**
 * This is the currently selected element.
 * It is being displayed in the main content area
 * @param {null|number|string} id - this contains the element id (when null, get all data)
 * 									(String for Sport level, int for other hierarchy nodes)
 * @param {string} [name] - the element name. Purposely duplicated from the hierarchy data
 * @param {array} breadcrumbs - list of ancestry elements. The lower the index the higher the ancestry
 * @param {object} marginItems - collection of MarginItem (described in the MarginItem interface)
 */
export interface CurrentItem {
	id: null | number | string;
	name?: string;
	breadcrumbs: string[];
	marginItems?: MarginItem[];
}

export interface currentItemState {
	readonly loading: boolean;
	readonly data: CurrentItem;
	readonly errors?: string;
}
