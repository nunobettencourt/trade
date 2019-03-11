import { Reducer } from 'redux'
import { currentItemActionTypes, CurrentItem, currentItemState } from './types'


const currentItem: CurrentItem = {
	id: null,
	breadcrumbs: []
}

const initialState: currentItemState = {
	loading: false,
	data: currentItem
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<currentItemState> = (state = initialState, action) => {
  switch (action.type) {
    case currentItemActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case currentItemActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case currentItemActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as currentItemReducer }