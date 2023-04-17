import React from 'react';
import $ from 'jquery'
import {Header, Footer} from './component';

import {Routes,Route, Link} from 'react-router-dom'
import { Home, Profile, Catalog, Popular, Subscription} from './Pages';

function App() {
  return (
<div className="wrap">
<Header/>


  <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/Catalog" element={<Catalog/>}/>
      <Route  path="/Profile" element={<Profile/>}/>
      <Route  path="/Popular" element={<Popular/>}/>
      <Route  path="/Subscription" element={<Subscription/>}/>
  </Routes>


<Footer/>
</div>
  )
};

export default App;