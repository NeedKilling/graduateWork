

export const setSortBy = ({type,order})=>({
    type: "SET_SORT_BY",
    payload : {type,order},

});
export const setSortByBar = (name)=>({
    type: "SET_SORT_BY_BAR",
    payload : name,

});
export const setSortByBarGenre = (name)=>({
    type: "SET_SORT_BY_BAR_GENRE",
    payload : name,

});

export const setCategorias = (value)=>({
    type: "SET_CATEGORIAS",
    payload : value,

});

