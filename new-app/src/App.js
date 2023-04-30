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
    axios.get("http://localhost:3000/db.json").then(({data}) =>{
    dispatch(setBooks(data.book))
  });
  },[]);

  return(
    
    <div className="wrap">
      <Header/>
      
      
        <Routes>
            <Route  path="/" Component={Home}/> {/*<Component items={bookBlock}/>*/}
            <Route  path="/Catalog" Component={Catalog} exact/>
            <Route  path="/Profile" Component={Profile}/>
            <Route  path="/Popular" Component={Popular}/>
            <Route  path="/Subscription" Component={Subscription}/>
            {/* <Route path='/BookPage/:id' Component={BookPage}/> */}
            <Route path='/db.json/:id' Component={BookPage}/>
            
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