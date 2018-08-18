/*
包含多个用于生成新的state的reducer函数的模块
 */
// import {combineReducers} from 'redux'

import {
  DATA,
  BANNER,
  HOME,
  DETAIL,
  CLASSIFY
} from './action-types'

// 产生data状态的reducer
const initUser = {
  homeHeaderNav: [],   // home页面的头部导航数据
  homeBanners: [], // home页 的banner
  home: {},  // home页 数据
  detail: {},  // 识物页 的数据
  categories: [] // 分类页 的数据
};

export default function getAllData(state = initUser, action) {
  switch (action.type) {
    case DATA:
      const homeHeaderNav = action.data;
      return {...state,homeHeaderNav};

    case BANNER:
      const homeBanners = action.data;
      //
      return {...state,homeBanners};

    case HOME:
      const home = action.data;
      return {...state,home};

    case DETAIL:
      const detail = action.data;
      return {...state,detail};

    case CLASSIFY:
      const categories = action.data;
      return {...state,categories};

    default:
      return state;
  }
}

// 合并多个reducer，生成一个新的reducer
// 返回的状态，是包含所有状态的对象: {getAllData: xxx}
/*
 combineReducers({
  getAllData
})*/
