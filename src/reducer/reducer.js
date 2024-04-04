// reducer.js

import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_STORE_FAILURE,
  FETCH_STORE_REQUEST,
  FETCH_STORE_SUCCESS,
  CREATE_STORE_FAILURE,
  CREATE_STORE_REQUEST,
  CREATE_STORE_SUCCESS,
  LOGIN_STORE_REQUEST,
  LOGIN_STORE_SUCCESS,
  LOGIN_STORE_FAILURE,
  PROFILE_FAILURE,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  ORDER_LIST_FAILURE,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_REQUEST,
  PRODUCT_IB_BY_REQUEST,
  PRODUCT_IB_BY_SUCCESS,
  PRODUCT_IB_BY_FAILURE,
  ADDCARD_IB_BY_REQUEST,
  ADDCARD_IB_BY_SUCCESS,
  ADDCARD_IB_BY_FAILURE,
  GET_ADDCARD_IB_BY_REQUEST,
  GET_ADDCARD_IB_BY_SUCCESS,
  GET_ADDCARD_IB_BY_FAILURE,
  DELETE_ADDCARD_IB_BY_REQUEST,
  DELETE_ADDCARD_IB_BY_SUCCESS,
  DELETE_ADDCARD_IB_BY_FAILURE,
  FETCH_ADDRESS_LIST_REQUEST,
  FETCH_ADDRESS_LIST_SUCCESS,
  FETCH_ADDRESS_LIST_FAILURE
} from "./actions";

const initialState = {
  data: null,
  productlist: null,
  storelist: null,
  loading: false,
  error: null,
  loginerror: null,
  userData: null, // This will store the response data
  loginData: null,
  getprofile: null,
  profileerror: null,
  Ordererror: null,
  getOrder: null,
  ProductIderror: null,
  GetProductId: null,
  ProductIdloading: null,
  addcardIdloading: null,
  GetAddcardRes: null,
  addloading: null,
  GetAddcardUserRes: null,
  Deleteloading: null,
  DeleteAddcardUserRes: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productlist: action.payload,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_STORE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_STORE_SUCCESS:
      return {
        ...state,
        loading: false,
        storelist: action.payload,
      };
    case FETCH_STORE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_STORE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        userData: null,
      };
    case CREATE_STORE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userData: action.payload, // Update userData with the response data
      };
    case CREATE_STORE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload, // Update error with the error message
        userData: null,
      };
    case LOGIN_STORE_REQUEST:
      return {
        ...state,
        loading: true,
        loginerror: null,
        loginData: null,
      };
    case LOGIN_STORE_SUCCESS:
      return {
        ...state,
        loading: false,
        loginerror: null,
        loginData: action.payload, // Update userData with the response data
      };
    case LOGIN_STORE_FAILURE:
      return {
        ...state,
        loading: false,
        loginerror: action.payload, // Update error with the error message
        loginData: null,
      };
    case PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        profileerror: null,
        getprofile: null,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profileerror: null,
        getprofile: action.payload, // Update userData with the response data
      };
    case PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        profileerror: action.payload, // Update error with the error message
        getprofile: null,
      };
    case ORDER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        Ordererror: null,
        getOrder: null,
      };
    case ORDER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        Ordererror: null,
        getOrder: action.payload, // Update userData with the response data
      };
    case ORDER_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        Ordererror: action.payload, // Update error with the error message
        getOrder: null,
      };
    case PRODUCT_IB_BY_REQUEST:
      return {
        ...state,
        ProductIdloading: true,
        ProductIderror: null,
        GetProductId: null,
      };
    case PRODUCT_IB_BY_SUCCESS:
      return {
        ...state,
        ProductIdloading: false,
        ProductIderror: null,
        GetProductId: action.payload, // Update userData with the response data
      };
    case PRODUCT_IB_BY_FAILURE:
      return {
        ...state,
        ProductIdloading: false,
        ProductIderror: action.payload, // Update error with the error message
        GetProductId: null,
      };
    case ADDCARD_IB_BY_REQUEST:
      return {
        ...state,
        addcardIdloading: true,
        GetAddcardRes: null,
      };
    case ADDCARD_IB_BY_SUCCESS:
      return {
        ...state,
        addcardIdloading: false,
        GetAddcardRes: action.payload, // Update userData with the response data
      };
    case ADDCARD_IB_BY_FAILURE:
      return {
        ...state,
        addcardIdloading: false,
        GetAddcardRes: action.payload,
      };
    case GET_ADDCARD_IB_BY_REQUEST:
      return {
        ...state,
        addloading: true,
        GetAddcardUserRes: null,
      };
    case GET_ADDCARD_IB_BY_SUCCESS:
      return {
        ...state,
        addloading: false,
        GetAddcardUserRes: action.payload, // Update userData with the response data
      };
    case GET_ADDCARD_IB_BY_FAILURE:
      return {
        ...state,
        addloading: false,
        GetAddcardUserRes: action.payload,
      };
    case DELETE_ADDCARD_IB_BY_REQUEST:
      return {
        ...state,
        Deleteloading: true,
        DeleteAddcardUserRes: null,
      };
    case DELETE_ADDCARD_IB_BY_SUCCESS:
      return {
        ...state,
        Deleteloading: false,
        DeleteAddcardUserRes: action.payload, // Update userData with the response data
      };
    case DELETE_ADDCARD_IB_BY_FAILURE:
      return {
        ...state,
        Deleteloading: false,
        DeleteAddcardUserRes: action.payload,
      };
      case FETCH_ADDRESS_LIST_REQUEST:
        return {
          ...state,
          error: null,
        };
      case FETCH_ADDRESS_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          addresslist: action.payload,
        };
      case FETCH_ADDRESS_LIST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

    default:
      return state;
  }
};

export default dataReducer;
