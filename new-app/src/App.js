import React from 'react';
import axios from 'axios'
import {Routes,Route} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {fetchBooks} from './redux/actions/books';

import {Header, Footer} from './component';
import { Home, Profile, Catalog, Popular, Subscription,BookPage,Text} from './Pages'; 

function App(){
  const dispatch = useDispatch();
 

  return(
    
    <div className="wrap">
      <Header/>
      
      
        <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/Catalog" element={<Catalog/>} exact/>
            <Route  path="/Profile" element={<Profile/>}/>
            <Route  path="/Popular" element={<Popular/>}/>
            <Route  path="/Subscription" element={<Subscription/>}/>
            <Route path='/Book/:id' element={<BookPage/>}/>
            <Route path='/Book/:id/:name' element={<Text/>}/>
            
            
        </Routes>
      
      
      
      <Footer/>
      </div>   
  );
};


export default App;

// const mapStateToProps = (state) =>{
//   return{
//     items: state.Books.items,
//     filtres: state.filtres
//   }
// }

// const mapDispatchToProps ={
// setBooksAction  

// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);