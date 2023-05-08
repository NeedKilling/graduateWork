import React from 'react';
import axios from 'axios'
import {Routes,Route} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import store from './redux/store';

import {Header, Footer} from './component';
import { Home, Profile, Catalog, Popular, Subscription,BookPage} from './Pages'; 
import {setBooks} from './redux/actions/books'


function App(){
  const dispatch = useDispatch();
 
  React.useEffect(()=>{
    axios.get("http://localhost:3001/book").then(({data}) =>{
    dispatch(setBooks(data))
  });
  },[]);

  return(
    
    <div className="wrap">
      <Header/>
      
      
        <Routes>
            <Route  path="/" element={<Home/>}/> {/*<Component items={bookBlock}/>*/}
            <Route  path="/Catalog" element={<Catalog/>} exact/>
            <Route  path="/Profile" element={<Profile/>}/>
            <Route  path="/Popular" element={<Popular/>}/>
            <Route  path="/Subscription" element={<Subscription/>}/>
            <Route path='/Book/:id' element={<BookPage/>}/>
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