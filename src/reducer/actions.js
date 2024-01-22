// actions.js

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const FETCH_STORE_REQUEST = 'FETCH_STORE_REQUEST';
export const FETCH_STORE_SUCCESS = 'FETCH_STORE_SUCCESS';
export const FETCH_STORE_FAILURE = 'FETCH_STORE_FAILURE';

export const fetchHeaderRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchHeaderSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchHeaderFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
export const fetchProductRequest = () => ({
  type: FETCH_PRODUCT_REQUEST,
});

export const fetchProductSuccess = (data) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: data,
});

export const fetchProductFailure = (error) => ({
  type: FETCH_PRODUCT_FAILURE,
  payload: error,
});

export const fetchStoreRequest = () => ({
  type: FETCH_STORE_REQUEST,
});

export const fetchStoreSuccess = (data) => ({
  type: FETCH_STORE_SUCCESS,
  payload: data,
});

export const fetchStoreFailure = (error) => ({
  type: FETCH_STORE_FAILURE,
  payload: error,
});
