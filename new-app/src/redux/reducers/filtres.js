
const initialState = {
    categorias: 0,
    sortBy : "popular"
}

const filtres = (state = initialState,action) => {
    if(action.type ==="SET_SORT_BY"){
        return{
            ...state,
            sortBy: action.payload,
        };
    }
    if(action.type ==="SET_CATEGORIAS"){
        return{
            ...state,
            categorias: action.payload,
        };
    }
    return state;
}

export default filtres; 