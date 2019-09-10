import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import CatalogActions from '~/store/ducks/catalog';

export function* loadCategories() {
  try {
    const response = yield call(api.get, 'categories');

    yield put(CatalogActions.loadCategoriesSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
    // yield put(CatalogActions.loadCategoriesFailure());
  }
}
export function* loadProducts({ categoryId }) {
  try {
    const response = yield call(api.get, `categories/${categoryId}/products`);

    yield put(CatalogActions.loadProductsSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
  }
}
export function* loadItems({ productId }) {
  try {
    const response = yield call(api.get, `products/${productId}/items`);

    yield put(CatalogActions.loadItemsSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
  }
}
