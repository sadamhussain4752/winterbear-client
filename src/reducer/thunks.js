// thunks.js

import axios from 'axios';
import {
  fetchHeaderRequest,
  fetchHeaderSuccess,
  fetchHeaderFailure,
  fetchProductFailure,
  fetchProductRequest,
  fetchProductSuccess,
  fetchStoreFailure,
  fetchStoreRequest,
  fetchStoreSuccess,
  CreateStoreSuccess,
  CreateStoreRequest,
  CreateStoreFailure,
  LoginStoreRequest,
  LoginStoreSuccess,
  LoginStoreFailure,
  ProfileFailure,
  ProfileRequest,
  ProfileSuccess,
  OrderSuccess,
  OrderRequest,
  OrderFailure,
  ProductIdSuccess,
  ProductIdRequest,
  ProductIdFailure,
  AddCardIdRequest,
  AddCardIdSuccess,
  AddCardIdFailure,
  GetAddCardIdRequest,
  GetAddCardIdSuccess,
  GetAddCardIdFailure,
  DeleteAddCardIdRequest,
  DeleteAddCardIdSuccess,
  DeleteAddCardIdFailure,
  AddressRequest,
  AddressSuccess,
  AddressFailure,
  CouponRequest,
  CouponSuccess,
  CouponFailure,
  fetchAddressRequest,
  fetchAddressSuccess,
  fetchAddressFailure
} from './actions';
import constant from '../constant/constant';

const HeadBanner = `${constant.baseUrl}api/header/allbanner?lang=1`;
const ProductList = `${constant.baseUrl}api/product/allProduct?lang=1`;
const storeList = `${constant.baseUrl}api/user/admins`;
const UserCreate = `${constant.baseUrl}api/user/register`;
const Userlogin = `${constant.baseUrl}api/user/login`;
const Userprofile = `${constant.baseUrl}api/user/userGetById`;
const Useraddress = `${constant.baseUrl}api/order/OrderlistById`;
const UserProductid = `${constant.baseUrl}api/product/Product`;
const AddCardProductid = `${constant.baseUrl}api/addcart/createCartItem`;
const GetAddCardProductcard = `${constant.baseUrl}api/addcart/addcartUser`;
const DelAddCardProductcard = `${constant.baseUrl}api/addcart/deleteCartItem`;
const AddOrderProductid = `${constant.baseUrl}api/order/createOrder`;
const AddAddressAPI = `${constant.baseUrl}api/address/createAddress`;
const ApplyCouponAPI = `${constant.baseUrl}api/coupon/applyCoupon`;
const GetAddressList = `${constant.baseUrl}api/address/getByIdAddress`;


export const fetchBannerData = () => async (dispatch) => {
  dispatch(fetchHeaderRequest());

  try {
    const response = await axios.get(HeadBanner);
    dispatch(fetchHeaderSuccess(response.data));
  } catch (error) {
    dispatch(fetchHeaderFailure(error.message));
  }
};

export const fetchProductData = () => async (dispatch) => {
  dispatch(fetchProductRequest());

  try {
    const response = await axios.get(ProductList);
    dispatch(fetchProductSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductFailure(error.message));
  }
};
export const fetchStoreData = () => async (dispatch) => {
  dispatch(fetchStoreRequest());

  try {
    const response = await axios.get(storeList);
    dispatch(fetchStoreSuccess(response.data));
  } catch (error) {
    dispatch(fetchStoreFailure(error.message));
  }
};

export const fetchAddressList = (id) => async (dispatch) => {
  dispatch(fetchAddressRequest());

  try {
    const response = await axios.get(`${GetAddressList}/${id}`);
    dispatch(fetchAddressSuccess(response.data));
  } catch (error) {
    dispatch(fetchAddressFailure(error.message));
  }
};

export const CreateUserData = (body) => async (dispatch) => {
  dispatch(CreateStoreRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(UserCreate, body);
    dispatch(CreateStoreSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(CreateStoreFailure(error.response.data.error));
  }
};

export const LoginUserData = (body) => async (dispatch) => {
  dispatch(LoginStoreRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(Userlogin, body);
    dispatch(LoginStoreSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(LoginStoreFailure(error.response.data.message));
  }
};
export const ProfileUserData = (body) => async (dispatch) => {
  dispatch(ProfileRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${Userprofile}/${body}`);
    dispatch(ProfileSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(ProfileFailure(error.response.data.message));
  }
};
export const OrderUserList = (body) => async (dispatch) => {
  dispatch(OrderRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${Useraddress}/${body}`);
    dispatch(OrderSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(OrderFailure(error.response.data.message));
  }
};
export const ProductUserById = (body) => async (dispatch) => {
  dispatch(ProductIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${UserProductid}/${body}`);
    dispatch(ProductIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(ProductIdFailure(error.response.data.message));
  }
};
export const AddCardProductById = (body) => async (dispatch) => {
  dispatch(AddCardIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(AddCardProductid,body);
    dispatch(AddCardIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddCardIdFailure(error.response.data.message));
  }
};
export const GetAddCardProductById = (body) => async (dispatch) => {
  dispatch(GetAddCardIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetAddCardProductcard}/${body}`);
    dispatch(GetAddCardIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(GetAddCardIdFailure(error.response.data.message));
  }
};
export const DeleteAddCardProductById = (body) => async (dispatch) => {
  dispatch(DeleteAddCardIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DelAddCardProductcard}/${body}`);
    dispatch(DeleteAddCardIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(DeleteAddCardIdFailure(error.response.data.message));
  }
};

export const AddOrderProductById = (body) => async (dispatch) => {
  dispatch(AddCardIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(AddOrderProductid,body);
    dispatch(AddCardIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddCardIdFailure(error.response.data.message));
  }
};


export const AddAddressFetch = (body,userId) => async (dispatch) => {
  dispatch(AddressRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddAddressAPI}`,body);
    dispatch(AddressSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddressFailure(error.response.data.message));
  }
};

export const ApplyCouponFetch = (body,userId) => async (dispatch) => {
  dispatch(CouponRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${ApplyCouponAPI}`,body);
    dispatch(CouponSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(CouponFailure(error.response.data.message));
  }
};
