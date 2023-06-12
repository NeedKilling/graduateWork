import axios from 'axios'

export const setLoaded = (payload) => ({
    type: 'SET_LOADING',
    payload,
})

export const fetchBooksCatalog = (sortBy,sortByBar,sortByBarGenre) => (dispatch)=>{
    console.log(sortByBarGenre)
    dispatch({
        type: 'SET_LOADING',
        payload: false,
    })
   
    if(sortByBarGenre === null && sortByBar === null){
        axios.get(`/book?_sort=${sortBy.type},vievs&_order=${sortBy.order}`).then(({data}) =>{
        dispatch(setBooks(data))})
    }else if(sortByBar !== null && sortByBarGenre === null){
        axios.get(`/book?_sort=${sortBy.type},vievs&_order=${sortBy.order}&country=${sortByBar}`).then(({data}) =>{
        dispatch(setBooks(data))})
    }else if (sortByBar === null && sortByBarGenre !== null){
        axios.get(`/book?_sort=${sortBy.type},vievs&_order=${sortBy.order}&genre=${sortByBarGenre}`).then(({data}) =>{
        dispatch(setBooks(data))})
    }else if(sortByBar !== null && sortByBarGenre !== null){
        axios.get(`/book?_sort=${sortBy.type},vievs&_order=${sortBy.order}&country=${sortByBar}&genre=${sortByBarGenre}`).then(({data}) =>{
        dispatch(setBooks(data))})
    }

};


export const fetchBooksProfile = (categorias) => (dispatch)=>{
    console.log(categorias)
    dispatch({
        type: 'SET_LOADING',
        payload: false,
    })
    axios.get(`/book?${categorias !== null ? `category=${categorias}` : ''}`).then(({data}) =>{
    dispatch(setBooks(data));
});
};
export const fetchBooksHome = () => (dispatch)=>{
    dispatch({
        type: 'SET_LOADING',
        payload: false,
    })
    axios.get(`/book`).then(({data}) =>{
    dispatch(setBooks(data));
});
};
export const fetchBooksPage = (id) => (dispatch)=>{
    console.log(id)
    axios.get(`/book/${id}`).then(({data}) =>{
    dispatch(setBookPage(data));
});
};




/////
export const addBookProfile = (payload) => (dispatch)=>{
    //console.log(payload)
    dispatch({
        type: 'ADD_BOOK',
        payload,
    })
};
//////
export const setBooks= (items)=>({
    type: "SET_BOOKS",
    payload : items,

});
export const setBookPage = (items)=>({
    type: "SET_BOOK_PAGE",
    payload : items,

});




