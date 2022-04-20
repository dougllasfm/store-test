import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
  requestApiAction,
  receiveApiAction,
} from "../actions/actions";

import { api } from "../../services/api";

function* getApiData() {
  try {
    const data = yield call(api.getProducts);
    yield put(receiveApiAction(data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetProducts() {
  yield takeLatest(GET_PRODUCTS, getApiData);
}

function* addProduct(action) {
  try {
    yield api.addProducts(action.newProduct);
    yield put(requestApiAction())
  } catch (error) {
    console.log(error);
  }
}

export function* watchAddProducts() {
  yield takeLatest(ADD_PRODUCT, addProduct);
}

function* updateProduct(action) {
  try {
    yield api.updateProduct(action.data);
    yield put(requestApiAction())
  } catch (error) {
    console.log(error);
  }
}

export function* watchUpdateProduct() {
  yield takeLatest(UPDATE_PRODUCT, updateProduct);
}

function* removeProduct(action) {
  try {
    yield api.deleteProducts(action.idProduct)
    yield put(requestApiAction())
  } catch (error) {
    console.log(error);
  }
}

export function* watchRemoveProducts() {
  yield takeLatest(REMOVE_PRODUCT, removeProduct);
}