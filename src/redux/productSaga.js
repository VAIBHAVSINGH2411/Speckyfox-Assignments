import { takeEvery, put } from 'redux-saga/effects'
import { ADD_TO_CART, PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT } from './constant';

function* getProducts() {
    let data = yield fetch("http://localhost:3500/product");
    data = yield data.json()
    yield put({ type: SET_PRODUCT_LIST, data: data })

}

function* searchProduct(data) {
    let result = yield fetch(`http://localhost:3500/product?q=${data.query}`);
    result = yield result.json()
    yield put({ type: SET_PRODUCT_LIST, data: result })

}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProduct)
}
export default productSaga;