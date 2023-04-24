import React, { Component } from 'react';
import axios from 'axios'

import {Header, Footer} from './component';

import {Routes,Route} from 'react-router-dom'
import { Home, Profile, Catalog, Popular, Subscription} from './Pages'; 

function App() {
const [bookBlock,setBookBlock] = React.useState([])

React.useEffect(()=>{
  axios.get("http://localhost:3000/db.json").then(({data}) =>{
    setBookBlock(data.book)
  });
  // fetch("http://localhost:3000/db.json").then((response)=> response.json()).then(json=>{
  //   setBookBlock(json.book)
  // });
}, []);

console.log(bookBlock)



  return (
<div className="wrap">
<Header/>


  <Routes>
      <Route  path="/" Component={()=><Home items = {bookBlock}/>}/> {/*<Component items={bookBlock}/>*/}
      <Route  path="/Catalog" Component={()=><Catalog items = {bookBlock}/>} exact/>
      <Route  path="/Profile" Component={Profile}/>
      <Route  path="/Popular" Component={Popular}/>
      <Route  path="/Subscription" Component={Subscription}/>
  </Routes>


<Footer/>
</div>
  )
};

export default App;