import {ADD_SINGLE_POST,REMOVE_SINGLE_POST} from "./types";
const initState = null

const post = (state=initState,action)=>{
    switch (action.type) {
        case ADD_SINGLE_POST : {
            return Object.assign({},action.payloads)
        }

        default : {
            return state
        }
    }
}

export default post;