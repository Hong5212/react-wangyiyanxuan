import React, {Component} from 'react'

import './shopCart.styl'

export default class ShopCart extends Component {
  render() {
    return (
      <div className="shopCartWrap">
        {/*购物车headerTop*/}
        <div className="m-hd">
          <div className="m-cartHd">
            <div className="logo">购物车</div>
            <div className="right">
              <a className="cart-coupon">领券</a>
            </div>
          </div>
        </div>
        {/*服务质量*/}
        <ul className="m-servicePolicy">
          <li className="item">
            <span>30天无忧退货</span>
          </li>
          <li className="item">
            <span>48小时快速退款</span>
          </li>
          <li className="item">
            <span>满88元免邮费</span>
          </li>
        </ul>
        {/*购物车大logo和登录*/}
        <div className="m-defaultPage m-defaultPage-noCart">
          <div className="container">
            <div className="img"></div>
            <div className="txt">
              <div className="noCart-login">
                <div className="noCart-title">去添加点什么吧</div>
                <div className="noCart-btn">登录</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}