/*
* this saga was created for loading single post if the client visit to site by absolute url (like http(s)://domain.com/post/id)
* */
import {takeEvery,put, call, select} from "redux-saga/effects";
import {
        REQUEST_SINGLE_POST,
        ADD_SINGLE_POST} from "@redux/types"
import axios from "axios";

export function* sagaPostWatcher() {
    yield takeEvery(REQUEST_SINGLE_POST,sagaSinglePostWorker)
}

function* sagaSinglePostWorker({payload}) {
    yield put({type:ADD_SINGLE_POST, payloads : null}) //remove old post
    const post = yield call(fetchSinglePost,payload);
    yield put({type:ADD_SINGLE_POST, payloads : post})
}

async function fetchSinglePost(id) {
    return await axios.get(`${process.env.API_URL}/api/character/${id}`)
                .then(data=>data.data)
}
