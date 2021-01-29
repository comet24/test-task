import {ADD_POSTS, ADD_SINGLE_POST} from "./types";
const initState = {
    data:[],
    single:undefined,
    page:1,
    load:true
}


const posts = (state=initState,action)=>{
    switch (action.type) {
        case ADD_POSTS : {
            return {
                data: [...state.data,...action.payloads.data],
                page: action.payloads.page,
                load:false,
            }
        }

        default : {
            return state
        }
    }
}

export default posts;