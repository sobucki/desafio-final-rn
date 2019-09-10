/* eslint-disable max-len */
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  loadCategoriesRequest: null,
  loadCategoriesSuccess: ['data'],
  loadCategoriesFailure: null,
});

export const CatalogTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  categories: [],
  loading: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_CATEGORIES_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_CATEGORIES_SUCCESS]: (state, { data }) => state.merge({ categories: data, loading: false }),
});
