import React from 'react';
import PropTypes from 'prop-types'
import {BookMark,BookHome, SliderBig,SliderMin} from '../component';

import store from '../redux/store';


function Home ({items}){
    
   console.log(store.getState())
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
                    <BookHome key = {obj.id} {...obj}  />
                    ))
                }
                
                    <button className="more">Загрузить еще...</button>
        </div>
    </div>
            </div>
        )
    
}



export default Home;

