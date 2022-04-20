export const GET_PRODUCTS = "GET_PRODUCTS";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const requestApiAction = () => ({ type: GET_PRODUCTS });

export const receiveApiAction = (data) => {
  return {
    type: RECEIVE_API_DATA,
    data,
  };
};

export const addProductAction = (newProduct) => ({
  type: ADD_PRODUCT,
  newProduct,
});

export const updateProductAction = (data) => ({ type: UPDATE_PRODUCT, data });

export const removeProductAction = (idProduct) => ({ type: REMOVE_PRODUCT, idProduct });
