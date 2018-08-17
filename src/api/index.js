/*
包含n个接口请求函数的模块
每个函数对应一个接口
每个函数的返回值是promise对象
 */
import ajax from './ajax'

// 请求home的data数据
export const reqData = () => ajax('/data');

// 请求home的banner数据
export const reqBanner = () => ajax('/banner');

// 请求home的allData数据
export const reqHome = () => ajax('/home');

// 请求识物(detail)的数据
export const reqDetail = () => ajax('/detail');

// 请求分类(classify)的数据
export const reqClassify = () => ajax('/nav');