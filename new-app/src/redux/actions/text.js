import axios from "axios";

export const fetchText = () => (dispatch)=>{
    axios.get(`http://localhost:3001/text`).then(({data}) =>{
    dispatch(setText(data));
});
};


export const setText = (textItems) => ({
    type: "SET_TEXT",
    payload: textItems,

});