import axios from 'axios'

// export const fetchBooks = () => (dispatch)=>{
//     axios.get("http://localhost:3001/book").then(({data}) =>{
//     dispatch(setProfileCat(data));
// });
// };


// const setProfileCat = (items)=>({
//     type: "SET_PROFILE",
//     payload : items,

// });
export const addBooksProfile = (bookOBJ) =>({
    type: "ADD_BOOKS_PROFILE",
    payload: bookOBJ
})
export const ClearProfile = () =>({
    type: "CLEAR_PROFILE",
})
export const removeProfileItem = (id) =>({
    type: "REMOVE_PROFILE_ITEM",
    payload: id,
})

