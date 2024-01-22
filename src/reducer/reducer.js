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
    FETCH_STORE_SUCCESS
  } from './actions';
  
  const initialState = {
    data: null,
    productlist:null,
    storelist:null,
    loading: false,
    error: null,
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
      default:
        return state;
    }
  };
  
  export default dataReducer;
  