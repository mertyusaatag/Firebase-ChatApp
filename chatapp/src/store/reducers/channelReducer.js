import * as types from "../actions/type";

const initalState = {
    currentChannel:null,

}



export default (state=initalState,action) => {
    switch (action.type) {
        case types.SET_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel: action.payload
            }
            
    
        default:
            return {
                ...state
            }
    }
}