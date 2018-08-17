/*
主界面的底部导航
 */
import React, {Component} from 'react'
import Proptypes from 'prop-types'
import {withRouter, NavLink} from 'react-router-dom'

import './footer-nav.styl'

class FooterNav extends Component {
  static propTypes = {
    navList: Proptypes.array.isRequired
  };

  render() {
    const navList = this.props.navList
    // 只有路由组件才能路由相关属性
    const path = this.props.location.pathname;
    // console.log(path);
    // 根据数据的数组生成标签的数组
    return (
      <footer className="footer_guide border-1px">
        {
          navList.map((nav, index) => {
            return (
              <NavLink className={`guide_item ${path === nav.path ? "on" : ''}`}
                 key={index} to={nav.path}>
                <span className="item_icon">
                  <i className={nav.icon}></i>
                </span>
                <span>{nav.text}</span>
              </NavLink>
            )
          })
        }
      </footer>
    )
  }
}

// 向一般组件传递路由相关属性(history/location/match)
export default withRouter(FooterNav)