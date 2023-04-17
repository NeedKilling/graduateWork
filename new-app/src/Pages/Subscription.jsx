import React from 'react';
import {Component} from 'react';


class Subscription extends Component{
    render(){
        return(
            <div class="subscription">
            <div class="container">
                <div class="tarif">
                    <div class="tarif_title">Тарифы</div>
                    <div class="tarif_subtitle">Лучшее соотношение цена = качество</div>
                    <div class="wrapper">
                        <div class="tarif_item">
                            <div class="title">Бронза</div>
                            <div class="description">
                                <div class="value">200 руб.</div>
                                <div class="term">1 месяц</div>
                                <div class="text">отключение рекламы</div>
                            </div>
                            <button class="btn">Купить</button>
                        </div>
                        <div class="tarif_item">
                            <div class="title">Сербро</div>
                            <div class="description">
                                <div class="value">550 руб.</div>
                                <div class="term">3 месяца</div>
                                <div class="text">отключение рекламы</div>
                            </div>
                            <button class="btn">Купить</button>
                        </div>
                        <div class="tarif_item">
                            <div class="title">Золото</div>
                            <div class="description">
                                <div class="value">1900 руб.</div>
                                <div class="term">1 год</div>
                                <div class="text">отключение рекламы</div>
                            </div>
                            <button class="btn">Купить</button>
                        </div>
                    </div>
                </div>
                <div class="compresion">
                    <div class="compresion_title">Сравнение тарифов</div>
                    <table class="table">
                        <tbody>
                            <tr>
                              <td></td>
                              <td>Без подписки</td>
                              <td>Бронза</td>
                              <td>Серебро</td>
                              <td>Золото</td>
                            </tr>
                            <tr>
                              <td>Отключение рекламы</td>
                              <td></td>
                              <td><div class="pip"></div></td>
                              <td><div class="pip"></div></td>
                              <td><div class="pip"></div></td>
                            </tr>
                            <tr>
                              <td>Доступ к главам по подписке</td>
                              <td></td>
                              <td><div class="pip"></div></td>
                              <td><div class="pip"></div></td>
                              <td><div class="pip"></div></td>
                            </tr>
                            <tr>
                              <td>Gif - аватар</td>
                              <td></td>
                              <td></td>
                              <td><div class="pip"></div></td>
                              <td><div class="pip"></div></td>
                            </tr>
                            <tr>
                              <td>Лейбл</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td><div class="pip"></div></td>
                            </tr>
                          </tbody>
                    </table>
                      
                </div>
            </div>
        </div>
        )
    }
}

export default Subscription;



