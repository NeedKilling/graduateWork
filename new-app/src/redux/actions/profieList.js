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