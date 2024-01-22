// rootReducer.js

import { combineReducers } from 'redux';
import dataReducer from './reducer';

const rootReducer = combineReducers({
  data: dataReducer,
  productlist: dataReducer,
  storelist: dataReducer,
});

export default rootReducer;
