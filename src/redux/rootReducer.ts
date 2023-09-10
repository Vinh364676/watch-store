import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import productReducer from "./slices/product"
// ----------------------------------------------------------------------

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

export const productPersistConfig = {
  key: 'product',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'checkout'],
};

const rootReducer = combineReducers({
  product: productReducer
});

export default rootReducer;
