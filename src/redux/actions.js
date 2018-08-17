/*
包含n个action creator函数的模块
同步action: 对象  (与action type一一对应)
异步action: 函数
 */
import {
  DATA,
  BANNER,
  HOME
} from './action-types'

import {
  reqData,
  reqBanner,
  reqHome
} from '../api/index'

// home的头部导航的同步action
export const getData = (data) => ({type: DATA, data: data});

// home的banner的同步action
export const getBanner = (focusList) => ({type: BANNER, data: focusList});


// home的allData的同步action
export const getHome = (home) => ({type: HOME, data: home});

// home的头部导航的异步action
export function getHeadNav(cd) {
  return async dispatch => {
    const response = await reqData();
    const result = response.data;
    if(result.code === 0){
      // 分发成功的同步action
      dispatch(getData(result.data))
      cd && cd()
    }else{
      console.log("reqData数据接收失败");
    }
  }
}

// home的banner的异步action
export function getHomeBanner(cd) {
  return async dispatch => {
    const response = await reqBanner();
    const result = response.data;
    // console.log(result);
    if(result.code === 0){
      // 发送成功的同步action
      dispatch(getBanner(result.focusList))
      cd && cd()
    }else{
      console.log("reqBanner数据接收失败");
    }
  }
}

// home的allData的异步action
export function getHomeData(cd) {
  return async dispatch => {
    const response = await reqHome();
    const result = response.data;
    // console.log(result);
    if(result.code === 0){
      // 发送成功的同步action
      dispatch(getHome(result.home))
      cd && cd()
    }else{
      console.log("reqHome数据接收失败");
    }
  }
}