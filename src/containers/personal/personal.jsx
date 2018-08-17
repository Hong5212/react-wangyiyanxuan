import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import ShiwuHeader from '../../components/shiwu-header/shiwu-header'

import './personal.styl'

export default class Personal extends Component {
  render() {
    return (
      <div>
        <ShiwuHeader/>
        {/*登陆类型的容器*/}
        <div className="loginTypesWrap">
          <div className="m-loginTypes">
            <div className="cont">
              <div className="logoWrap">
                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="pic"/>
              </div>
              <div className="btnWrap">
                <NavLink className="w-button" to="/login">
                  <i className="loginPhone"></i>
                  <span>手机号码登录</span>
                </NavLink>
                <NavLink className="w-button" to="/login">
                  <i className="loginMail"></i>
                  <span>邮箱帐号登录</span>
                </NavLink>
                <NavLink className="btn" to="/login">
                  <span>手机号快捷注册</span>
                  <i className="arrow-right3"></i>
                </NavLink>
              </div>
            </div>
            <div className="thirdWrap">
              <div className="itemWrap">
                <NavLink className="item" to="/login">
                  <span className="name">微信</span>
                </NavLink>
              </div>
              <div className="itemWrap">
                <NavLink className="item" to="/login">
                  <span className="name">QQ</span>
                </NavLink>
              </div>
              <div className="itemWrap">
                <NavLink className="item" to="/login">
                  <span className="name">微博</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}