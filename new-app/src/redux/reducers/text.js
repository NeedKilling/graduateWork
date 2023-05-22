const initialState = {
    textItems : [],
 }
 
 const text = (state = initialState,action) => {
     
    if(action.type === "SET_TEXT"){
        return{
            ...state,
            textItems: action.payload,
        };   
    };   
     return state;
 }

 export default text