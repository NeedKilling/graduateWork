import React from 'react'

function SortBar({items}) {
  return (
    <div class="sortBar">
                    <div class="sortBar_item">
                        <div class="text">Жанр</div>
                        <div class="check">
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
                    <div class="sortBar_item country">
                        <div class="text">Страна</div>
                        <div class="check">
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

                <div class="navigat">   
                        <button class="btn show">Показать</button>
                        <button class="btn reset">Сбросить</button>
                </div>

            </div>
  )
}
export default SortBar;