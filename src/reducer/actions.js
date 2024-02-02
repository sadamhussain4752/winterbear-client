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
export const CREATE_STORE_REQUEST = 'CREATE_STORE_REQUEST';
export const CREATE_STORE_SUCCESS = 'CREATE_STORE_SUCCESS';
export const CREATE_STORE_FAILURE = 'CREATE_STORE_FAILURE';
export const LOGIN_STORE_REQUEST = 'LOGIN_STORE_REQUEST';
export const LOGIN_STORE_SUCCESS = 'LOGIN_STORE_SUCCESS';
export const LOGIN_STORE_FAILURE = 'LOGIN_STORE_FAILURE';
export const PROFILE_REQUEST = 'PROFILE_REQUEST';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_FAILURE = 'PROFILE_FAILURE';
export const ORDER_LIST_REQUEST = 'ORDER_LIST_REQUEST';
export const ORDER_LIST_SUCCESS = 'ORDER_LIST_SUCCESS';
export const ORDER_LIST_FAILURE = 'ORDER_LIST_FAILURE';
export const PRODUCT_IB_BY_REQUEST = 'PRODUCT_IB_BY_REQUEST';
export const PRODUCT_IB_BY_SUCCESS = 'PRODUCT_IB_BY_SUCCESS';
export const PRODUCT_IB_BY_FAILURE = 'PRODUCT_IB_BY_FAILURE';
export const ADDCARD_IB_BY_REQUEST = 'ADDCARD_IB_BY_REQUEST';
export const ADDCARD_IB_BY_SUCCESS = 'ADDCARD_IB_BY_SUCCESS';
export const ADDCARD_IB_BY_FAILURE = 'ADDCARD_IB_BY_FAILURE';
export const GET_ADDCARD_IB_BY_REQUEST = 'GET_ADDCARD_IB_BY_REQUEST';
export const GET_ADDCARD_IB_BY_SUCCESS = 'GET_ADDCARD_IB_BY_SUCCESS';
export const GET_ADDCARD_IB_BY_FAILURE = 'GET_ADDCARD_IB_BY_FAILURE';
export const DELETE_ADDCARD_IB_BY_REQUEST = 'DELETE_ADDCARD_IB_BY_REQUEST';
export const DELETE_ADDCARD_IB_BY_SUCCESS = 'DELETE_ADDCARD_IB_BY_SUCCESS';
export const DELETE_ADDCARD_IB_BY_FAILURE = 'DELETE_ADDCARD_IB_BY_FAILURE';
export const ADD_ORDER_IB_BY_REQUEST = 'ADD_ORDER_IB_BY_REQUEST';
export const ADD_ORDER_IB_BY_SUCCESS = 'ADD_ORDER_IB_BY_SUCCESS';
export const ADD_ORDER_IB_BY_FAILURE = 'ADD_ORDER_IB_BY_FAILURE';

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


export const CreateStoreRequest = () => ({
  type: CREATE_STORE_REQUEST,
});

export const CreateStoreSuccess = (data) => ({
  type: CREATE_STORE_SUCCESS,
  payload: data,
});

export const CreateStoreFailure = (error) => ({
  type: CREATE_STORE_FAILURE,
  payload: error,
});
export const LoginStoreRequest = () => ({
  type: LOGIN_STORE_REQUEST,
});

export const LoginStoreSuccess = (data) => ({
  type: LOGIN_STORE_SUCCESS,
  payload: data,
});

export const LoginStoreFailure = (error) => ({
  type: LOGIN_STORE_FAILURE,
  payload: error,
});

export const ProfileRequest = () => ({
  type: PROFILE_REQUEST,
});

export const ProfileSuccess = (data) => ({
  type: PROFILE_SUCCESS,
  payload: data,
});

export const ProfileFailure = (error) => ({
  type: PROFILE_FAILURE,
  payload: error,
});
export const OrderRequest = () => ({
  type: ORDER_LIST_REQUEST,
});

export const OrderSuccess = (data) => ({
  type: ORDER_LIST_SUCCESS,
  payload: data,
});

export const OrderFailure = (error) => ({
  type: ORDER_LIST_FAILURE,
  payload: error,
});
export const ProductIdRequest = () => ({
  type: PRODUCT_IB_BY_REQUEST,
});

export const ProductIdSuccess = (data) => ({
  type: PRODUCT_IB_BY_SUCCESS,
  payload: data,
});

export const ProductIdFailure = (error) => ({
  type: PRODUCT_IB_BY_FAILURE,
  payload: error,
});
export const AddCardIdRequest = () => ({
  type: ADDCARD_IB_BY_REQUEST,
});

export const AddCardIdSuccess = (data) => ({
  type: ADDCARD_IB_BY_SUCCESS,
  payload: data,
});

export const AddCardIdFailure = (error) => ({
  type: ADDCARD_IB_BY_FAILURE,
  payload: error,
});
export const GetAddCardIdRequest = () => ({
  type: GET_ADDCARD_IB_BY_REQUEST,
});

export const GetAddCardIdSuccess = (data) => ({
  type: GET_ADDCARD_IB_BY_SUCCESS,
  payload: data,
});

export const GetAddCardIdFailure = (error) => ({
  type: GET_ADDCARD_IB_BY_FAILURE,
  payload: error,
});
export const DeleteAddCardIdRequest = () => ({
  type: DELETE_ADDCARD_IB_BY_REQUEST,
});

export const DeleteAddCardIdSuccess = (data) => ({
  type: DELETE_ADDCARD_IB_BY_SUCCESS,
  payload: data,
});

export const DeleteAddCardIdFailure = (error) => ({
  type: DELETE_ADDCARD_IB_BY_FAILURE,
  payload: error,
});

export const AddOrderIdRequest = () => ({
  type: ADD_ORDER_IB_BY_REQUEST,
});

export const AddOrderIdSuccess = (data) => ({
  type: ADD_ORDER_IB_BY_SUCCESS,
  payload: data,
});

export const AddOrderIdFailure = (error) => ({
  type: ADD_ORDER_IB_BY_FAILURE,
  payload: error,
});