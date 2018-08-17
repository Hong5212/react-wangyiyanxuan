/*
主界面组件
 */
import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from "../home/home";
import Detail from "../detail/detail";
import ShopCart from "../shopCart/shopCart";
import Classify from "../classify/classify";
import Personal from "../personal/personal";
import FooterNav from '../../components/footer-nav/footer-nav'

import '../../assets/js/index'

export default class Main extends Component {
  /*底部导航数据*/
  navList = [
    {
      path: '/home', // 路由路径
      component: Home,
      icon: 'iconfont icon-shouye',
      text: '首页'
    },
    {
      path: '/detail', // 路由路径
      component: Detail,
      icon: 'iconfont icon-fangkuaidagou-weixuanzhong',
      text: '识物'
    },
    {
      path: '/classify', // 路由路径
      component: Classify,
      icon: 'iconfont icon-chouti',
      text: '分类'
    },
    {
      path: '/shopCart', // 路由路径
      component: ShopCart,
      icon: 'iconfont icon-gouwuche',
      text: '购物车'
    },
    {
      path: '/personal', // 路由路径
      component: Personal,
      icon: 'iconfont icon-renwu',
      text: '个人'
    }
  ]

  render() {
    return (
      <div>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/detail' component={Detail}/>
          <Route path='/shopCart' component={ShopCart}/>
          <Route path='/classify' component={Classify}/>
          <Route path='/personal' component={Personal}/>
          <Redirect to='/detail'/>
        </Switch>
        <FooterNav navList={this.navList}/>
      </div>
    )
  }
}