import { Reducer } from 'redux'
import { {{lowerCase name}}State, {{lowerCase name}}ActionTypes } from './types'

// Type-safe initialState!
const initialState: {{lowerCase name}}State = {
  data: {},
  errors: undefined,
  loading: false
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<{{lowerCase name}}State> = (state = initialState, action) => {
  switch (action.type) {
    case {{lowerCase name}}ActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case {{lowerCase name}}ActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case {{lowerCase name}}ActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as {{lowerCase name}}Reducer }