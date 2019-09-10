/* eslint-disable max-len */
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  loadCategoriesRequest: null,
  loadCategoriesSuccess: ['data'],
  loadCategoriesFailure: null,

  loadProductsRequest: ['categoryId'],
  loadProductsSuccess: ['data'],
  loadProductsFailure: null,

  loadItemsRequest: ['productId'],
  loadItemsSuccess: ['data'],
  loadItemsFailure: null,
});

export const CatalogTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  categories: [],
  products: [],
  items: [],
  loading: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_CATEGORIES_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_CATEGORIES_SUCCESS]: (state, { data }) => state.merge({ categories: data, loading: false }),

  [Types.LOAD_PRODUCTS_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_PRODUCTS_SUCCESS]: (state, { data }) => state.merge({ products: data, loading: false }),

  [Types.LOAD_ITEMS_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_ITEMS_SUCCESS]: (state, { data }) => state.merge({ items: data, loading: false }),
});
