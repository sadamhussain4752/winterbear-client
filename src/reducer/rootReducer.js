// rootReducer.js

import { combineReducers } from 'redux';
import dataReducer from './reducer';

const rootReducer = combineReducers({
  data: dataReducer,
  productlist: dataReducer,
  storelist: dataReducer,
  userData: dataReducer,
  loginData: dataReducer,
  getprofile: dataReducer,
  getOrder: dataReducer,
  GetProductId: dataReducer,
  GetAddcardRes: dataReducer,
  GetAddcardUserRes: dataReducer,
  DeleteAddcardUserRes: dataReducer,
});

export default rootReducer;
