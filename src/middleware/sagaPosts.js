import {takeEvery,put, call, select} from "redux-saga/effects";
import {REQUEST_POSTS,
        ADD_POSTS} from "@redux/types"
import axios from "axios";

export function* sagaPostsWatcher() {
    yield takeEvery(REQUEST_POSTS,sagaPostsWorker)
}

function* sagaPostsWorker() {
    const page = yield select(getStore) // get next page from store (number)
    const posts = yield call(fetchPosts,page); // get async posts
    if(posts.info.next!=null) {
        yield put({type:ADD_POSTS, payloads : {
                data : posts.results,
                page : posts.info.next.split("=")[1] // get number of next page
            }})
    }
}

async function fetchPosts(page) {
    return await axios.get(`${process.env.API_URL}/api/character?page=${page}`)
                .then(data=>data.data)
}

function getStore(state) {
    return state.posts.page
}