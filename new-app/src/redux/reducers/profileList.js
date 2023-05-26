

// const initialState = {
//     items : [],
//     isLoaded : false
//  }
 
//  const profileList = (state = initialState,action) => {
//      if(action.type ==="SET_PROFILE"){
//          return{
//              ...state,
//              items: action.payload,
//          };
//      }
//      return state;
//  }
 
//  export default profileList; 

const initialState = {
    items : {},
    totalCount: 0
 }
 
 const Profile = (state = initialState,action) => {
    switch(action.type){
         case "ADD_BOOKS_PROFILE":{
            const newItems = {
                    ...state.items,   /// возьмет старое                  
                    [action.payload.id]: !state.items[action.payload.id] 
                    ? [action.payload] 
                    : [...state.items[action.payload.id],action.payload]
            }
             return{
                 ...state,         // вверни весь старое состояние (обЪект) 
                 items: newItems,
                 totalCount: [].concat.apply([], Object.values(newItems)).length
             };
            }
         default:
             return state
     }
 }
 
 export default Profile; 