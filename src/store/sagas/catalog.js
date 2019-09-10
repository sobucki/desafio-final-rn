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
