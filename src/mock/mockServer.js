/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data'
import home_data from './home_data'
import detail from './shiwu_data'
import data_nav from './data_nav'

// 返回data的接口
Mock.mock('/data', {code:0, data: data})

// 返回首页轮播图片的接口
Mock.mock('/banner', {code: 0, focusList: home_data.focusList})

// 返回home页数据的接口
Mock.mock('/home', {code: 0, home: home_data})

// 返回 识物页 数据的接口
Mock.mock('/detail', {code: 0, detail: detail})

//返回 分类页 nav 数据
Mock.mock('/nav', {code:0, categories: data_nav.categoryL1List})
