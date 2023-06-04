
const initialState = {
    categorias: null,
    sortBy : {
        type: "rating",
        order: 'desc',
    },
    sortByBar: null,
    sortByBarGenre: null,
    addedCategorias: null
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
    if(action.type ==="SET_SORT_BY_BAR"){
        return{
            ...state,
            sortByBar: action.payload,
        };
    }
    if(action.type ==="SET_SORT_BY_BAR_GENRE"){
        return{
            ...state,
            sortByBarGenre: action.payload,
        };
    }
    if(action.type ==="SET_ADDED_CATEGORIAS"){
        return{
            ...state,
            addedCategorias: action.payload,
        };
    }
    return state;
}

export default filtres; 