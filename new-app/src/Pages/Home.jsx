import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {BookHome, SliderBig,SliderMin} from '../component';
import { fetchBooksHome} from '../redux/actions/books';

function Home (){
    const dispatch = useDispatch();
    const items = useSelector(({Profile}) => Profile.items);
    const totalCount = useSelector(({Profile})=>Profile.totalCount)
    const itemsState = useSelector((state) => state.Books.items)
      React.useEffect(()=>{
        dispatch(fetchBooksHome())
    },[]);

    let addedBooksProfile = Object.keys(items).map((key,index) => {
        console.log(items[key])
        return items[key][16] || items[key][15] || items[key][14] || items[key][13] || items[key][12] || items[key][11] || items[key][10] || 
        items[key][9] || items[key][8] || items[key][7] || items[key][6] ||
                items[key][5] || items[key][4] || items[key][3] || items[key][2] || items[key][1] || items[key][0]
        
    });
    const categoriasBooks = addedBooksProfile.filter(e => e.type === "Читаю") 
    addedBooksProfile = categoriasBooks

        return(
            <div>
                <div className="intro">
        <div className="intro_title">RanobeRoom - ранобе на русском онлайн</div>
</div>

 
<div className={categoriasBooks.length === 0 ? "continueRead" : "continueRead continueRead_active"}>
    <div className="container">
        <div className="continueRead_block">
            <h2 className="title">Продолжить чтение</h2>
           <SliderMin addedBooksProfile={addedBooksProfile} curentReadBooks = {categoriasBooks.length}/>
        </div>
    </div>
</div>

    <SliderBig items={itemsState}/>

    <div className="lastUpdate">
        <div className="container">
            <div className="lastUpdate__title">
                <div className="line"></div>
                <h3 className="title">Последние обновления</h3>
                <div className="line"></div>
            </div>
                {
                    itemsState.map(obj =>(    
                    <BookHome key = {obj.id} {...obj}/>
                    ))
                }
                {/* <div className='more'>Загрузить еще...</div> */}
        </div>
    </div>
            </div>
        )
}
export default Home;

