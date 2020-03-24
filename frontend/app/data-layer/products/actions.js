export const LOAD_INIT_PRODUCTS = 'LOAD_INIT_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const initProductsData = () => ({
    type: LOAD_INIT_PRODUCTS
});

export const setProducts = payload => ({
    type: SET_PRODUCTS,
    payload
});
