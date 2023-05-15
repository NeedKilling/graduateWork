import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {BookMark,BookHome, SliderBig,SliderMin} from '../component';
import { Link } from 'react-router-dom';
import store from '../redux/store';
import {fetchBooks} from '../redux/actions/books';

function Home (){
    const dispatch = useDispatch();
 
    const {items} = useSelector((state) => {
        return {
          items : state.Books.items,
          sortBy: state.filtres.sortBy
        };
      });
      

        return(
            <div>
                <div className="intro">
        <div className="intro_title">RanobeRoom - ранобе на русском онлайн</div>
</div>

 
<div className="continueRead continueRead_active">
    <div className="container">
        <div className="continueRead_block">
            <h2 className="title">Продолжить чтение</h2>
           <SliderMin/>
        </div>
    </div>
</div>

    <SliderBig items={items}/>

    <div className="lastUpdate">
        <div className="container">
            <div className="lastUpdate__title">
                <div className="line"></div>
                <h3 className="title">Последние обновления</h3>
                <div className="line"></div>
            </div>
                {
                    items.map(obj =>(    
                    <BookHome key = {obj.id} {...obj}/>
                    ))
                }
        </div>
    </div>
            </div>
        )
}
export default Home;

