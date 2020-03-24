export const LOAD_INIT_PRODUCTS = 'LOAD_INIT_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const REGISTER_PRODUCT = 'REGISTER_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';

export const initProductsData = () => ({
    type: LOAD_INIT_PRODUCTS
});

export const setProducts = payload => ({
    type: SET_PRODUCTS,
    payload
});

export const registerProduct = payload => ({
    type: REGISTER_PRODUCT,
    payload
});

export const addProduct = payload => ({
    type: ADD_PRODUCT,
    payload
});
