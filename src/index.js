/*
入口JS
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './mock/mockServer'
import store from './redux/store'

import Main from './containers/main/main'

import '../src/assets/css/reset.css'
import 'swiper/dist/css/swiper.min.css'

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route component={Main}/>
      </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
