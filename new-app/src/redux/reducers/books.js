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
        case "SET_BOOK_PAGE":
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
        case "ADD_BOOK":
        return{
            ...state,
            addItems: action.payload,
        };
        case "SET_TEXT":
        return{
            ...state,
            textItems: action.payload,
        };
        default:
            return state
    }
    
    return state;
}

export default books; 