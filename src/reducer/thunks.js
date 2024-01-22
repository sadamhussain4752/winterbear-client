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
  fetchStoreSuccess
} from './actions';
import constant from '../constant/constant';

const HeadBanner = `${constant.baseUrl}api/header/allbanner?lang=1`;
const ProductList = `${constant.baseUrl}api/header/allbrandproduct?lang=1`;
const storeList = `${constant.baseUrl}api/user/admins`;

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
