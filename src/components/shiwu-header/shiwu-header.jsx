import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import './shiwu-header.styl'

export default class ShiwuHeader extends Component{
    render(){
        return(
          <div className="m-topBar">
            <div className="bd">
              <div className="row">
                <NavLink className="home" to="/home"></NavLink>
                <NavLink className="logo" to="/home"></NavLink>
                <div className="right">
                  <NavLink className="search" to='/shopCart'></NavLink>
                  <NavLink className="cart" to="/shopCart"></NavLink>
                </div>
              </div>
            </div>
          </div>
        )
    }
}