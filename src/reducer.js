const initialState = {
    count : 0,
}

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case "INCREATE": return {...state,count : state.count + 1};
        case "DECREATE": return {...state,count : state.count - 1};
        case "RESET" : return {...state, count:  0};
        default : return state;
    }
}
export default reducer;