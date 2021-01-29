import {REQUEST_POSTS, REQUEST_SINGLE_POST} from "@redux/types";

export function fetchPosts() {
    return {
        type : REQUEST_POSTS,
    }
}

export function fetchSinglePost(id) {
    return {
        type : REQUEST_SINGLE_POST,
        payload : id
    }
}

