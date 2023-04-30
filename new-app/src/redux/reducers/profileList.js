

const initialState = {
    items : [],
    isLoaded : false
 }
 
 const profileList = (state = initialState,action) => {
     if(action.type ==="SET_PROFILE"){
         return{
             ...state,
             items: action.payload,
         };
     }
     return state;
 }
 
 export default profileList; 