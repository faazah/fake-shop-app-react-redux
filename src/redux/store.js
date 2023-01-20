import { legacy_createStore as createStore} from 'redux';
import { rootReducer } from "./index";

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

console.log(store.getState());