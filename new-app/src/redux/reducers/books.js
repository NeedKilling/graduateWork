const initialState = {
   items : [],
   isLoaded : false
}

const books = (state = initialState,action) => {
    switch(action.type){
        case "SET_BOOKS":
            return{
                ...state,
                items: action.payload,
                isLoaded: true,
            };
        case "SET_LOADING":
            return{
                ...state,
                isLoaded: action.payload,
            };
        default:
            return state
    }
    
    return state;
}

export default books; 