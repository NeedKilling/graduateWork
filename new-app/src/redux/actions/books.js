import axios from 'axios'

export const setLoaded = (payload) => ({
    type: 'SET_LOADING',
    payload,
})

export const fetchBooksCatalog = (sortBy) => (dispatch)=>{
    console.log(sortBy)
    dispatch({
        type: 'SET_LOADING',
        payload: false,
    })
    axios.get(`http://localhost:3001/book?_sort=${sortBy.type},vievs&_order=${sortBy.order}`).then(({data}) =>{
    dispatch(setBooks(data));
});
};

export const fetchBooksProfile = (categorias) => (dispatch)=>{
    console.log(categorias)
    dispatch({
        type: 'SET_LOADING',
        payload: false,
    })
    axios.get(`http://localhost:3001/book?${categorias !== null ? `category=${categorias}` : ''}`).then(({data}) =>{
    dispatch(setBooks(data));
});
};

export const setBooks= (items)=>({
    type: "SET_BOOKS",
    payload : items,

});

