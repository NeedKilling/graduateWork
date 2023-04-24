import React from 'react'

function SortBar({items}) {
   const country = ["Япония","Корея","Китай"]

    const [checkJapan,setCheckJapan] = React.useState(false)
    const [checkKorea,setCheckKorea] = React.useState(false)
    const [checkChina,setCheckChina] = React.useState(false)

    const buttonReset = () =>{
        setCheckJapan(false)
        setCheckKorea(false)
        setCheckChina(false)
        
    }

  return (
    <div className="sortBar">
                    <div className="sortBar_item">
                        <div className="text">Жанр</div>
                        <div className="check">
                           <div className="column">
                            <div className="check_item">
                                    <input type="checkbox" id="fantasy" name="fantasy"/>
                                    <label for="fantasy">фэнтези</label>
                                </div>
                                <div className="check_item">
                                    <input type="checkbox" id="romance" name="romance"/>
                                    <label for="romance">романтика</label>
                                </div>
                                <div className="check_item">
                                    <input type="checkbox" id="drama" name="drama"/>
                                    <label for="drama">драма</label>
                                </div>
                           </div>
                            <div className="column">
                                <div className="check_item">
                                    <input type="checkbox" id="comedy" name="comedy"/>
                                    <label for="comedy">комедия</label>
                                </div>
                                <div className="check_item">
                                    <input type="checkbox" id="actionMovie" name="actionMovie"/>
                                    <label for="actionMovie">боевик</label>
                                </div>
                                <div className="check_item">
                                    <input type="checkbox" id="horror" name="horror"/>
                                    <label for="horror">ужасы</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sortBar_item country">
                        <div className="text">Страна</div>
                        <div className="check">
                            <div className="check_item">
                                <input type="checkbox" id="Japan" className='japan' checked={checkJapan} onClick={()=>setCheckJapan(!checkJapan)} />
                                <label for="Japan">Япония</label>
                            </div>
                            <div className="check_item">
                                <input type="checkbox" id="Korea"  lassName='Korea' checked={checkKorea} onClick={()=>setCheckKorea(!checkKorea)}/>
                                <label for="Korea">Корея</label>
                            </div>
                            <div className="check_item">
                                <input type="checkbox" id="China" lassName='China' checked={checkChina} onClick={()=>setCheckChina(!checkChina)}/>
                                <label for="China">Китай</label> 

                            </div>
                            {/* {
                                country.map((name,index)=>
                                    <div key = {`${name}_${index}`}className="check_item">
                                        <input type="checkbox" id={name} className={name} checked={index === checkJapan} onClick={()=>setCheckJapan(index)} />
                                        <label for={name}>{name}</label>
                                    </div>
                                )
                            } */}
                        </div>
                    </div>

                <div className="navigat">   
                        <button className="btn show">Показать</button>
                        <button onClick={buttonReset} className="btn reset">Сбросить</button>
                </div>

            </div>
  )
}
export default SortBar;