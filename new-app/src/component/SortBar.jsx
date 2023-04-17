import React from 'react'

function SortBar({items}) {
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
                                <input type="checkbox" id="Japan" name="Japan"/>
                                <label for="Japan">Япония</label>
                            </div>
                            <div className="check_item">
                                <input type="checkbox" id="Korea" name="Korea"/>
                                <label for="Korea">Корея</label>
                            </div>
                            <div className="check_item">
                                <input type="checkbox" id="Китай" name="Китай"/>
                                <label for="Китай">Китай</label>
                            </div>
                        </div>
                    </div>
                    {/* <div class="sortBar_item old">
                        <div class="text">Год издания</div>
                        <button class="btn_drop">за все время</button>
                    </div> */}

                <div className="navigat">   
                        <button className="btn show">Показать</button>
                        <button className="btn reset">Сбросить</button>
                </div>

            </div>
  )
}
export default SortBar;