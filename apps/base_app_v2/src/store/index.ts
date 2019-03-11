import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"

// import reducers
import { hierNodesReducer } from "./hiernodes/reducers";
import { userReducer } from "./user/reducers";
import { currentItemReducer } from "./currentitem/reducers";

const rootReducer = combineReducers({
  hierNodes: hierNodesReducer,
  currentItem : currentItemReducer,
  user: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
