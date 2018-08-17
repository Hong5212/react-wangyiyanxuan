/*
首页的主界面路由
*/
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import BScroll from 'better-scroll'
import Swiper from 'swiper'

import {getHeadNav, getHomeBanner, getHomeData} from '../../redux/actions'
import GoodList from '../../components/good-list/good-list';

import './home.styl'

class Home extends Component {
  //定义初始状态
  state = {
    currentIndex: 0  // 当前下标
  };

  componentDidMount() {
    // console.log('home')
    this.props.getHeadNav(() => {
      new BScroll('.header-tabs', {
        scrollX: true,
        click: true,
        eventPassthrough: 'vertical'
      });
    });
    this.props.getHomeBanner(() => {
      new Swiper('.swiper-container', {
        loop: true, // 循环

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    });
    this.props.getHomeData(() => {
      new BScroll('.newPro', {
        scrollX: true,
        click: true,
        eventPassthrough: 'vertical'
      });
      new BScroll('.popular', {
        scrollX: true,
        click: true,
        eventPassthrough: 'vertical'
      });
      new BScroll('.indexTopics-slide', {
        scrollX: true,
        click: true,
        eventPassthrough: 'vertical'
      });
    })
  }

  isActive = (index) => {
    // 更新下标
    this.setState({
      currentIndex: index
    })
  };

  render() {
    // home头部导航列表
    let {homeHeaderNav, homeBanners, home} = this.props;
    const {currentIndex} = this.state;
    return (
      <div>
        {/*头部*/}
        <div className="home-header">
          <div className="logo-search">
            <NavLink className="logo" to='/home'>网易严选</NavLink>
            <div className="search">
              <i className="iconfont icon-xingtaiduICON_sousuo--"></i>
              <span className="placeholder">搜索商品, 共11781款好物</span>
            </div>
          </div>
          {/*头部导航*/}
          <div className="header-tabs">
            <div className="tab">
              {homeHeaderNav && homeHeaderNav.map((item, index) => {
                return (
                  <span key={index} onClick={() => this.isActive(index)}
                        className={currentIndex === index ? 'active' : ''}>{item.name}</span>
                )
              })
              }
            </div>
          </div>
        </div>
        {/*轮播图*/}
        <div className="swiper-container lbt">
          <div className="swiper-wrapper">
            {homeBanners && homeBanners.map((banner, index) => {
              return (
                <div className="swiper-slide" key={index}>
                  <img src={banner.picUrl} alt='lbt'/>
                </div>
              )
            })
            }
          </div>
          {/*Add Pagination*/}
          <div className="swiper-pagination"></div>
        </div>
        {/*网易自营品牌*/}
        <div className="indexServeicPolicy">
          <ul className="g-grow">
            {
              home.policyDescList && home.policyDescList.map((policy, index) => {
                return (
                  <li className="item" key={index}>
                    <a >
                      <img src={policy.icon} alt='自营'/>
                      <span className="text">{policy.desc}</span>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        {/*制造商*/}
        <div className="maker">
          <div className="maker-header">
            <a className="more">
              <span>品牌制造商直供</span>
              <i className="iconfont icon-yuanjiantou1"></i>
            </a>
          </div>
          <ul className="maker-list">
            {
              home.tagList && home.tagList.map((tag, index) => {
                return (
                  <li className="item" key={index}>
                    <a>
                      <div className="cnt">
                        <h4 className="title">name</h4>
                        <div>
                          <span className="price1">{tag.floorPrice}</span>
                          <span className="price2">元起</span>
                        </div>
                      </div>
                      <img src={tag.picUrl} alt=""/>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        {/*新品首发*/}
        <div className="indexFloor newItems">
          <div className="new-hd">
            <a className="more">
              <span>新品首发</span>
              <div className="all">
            <span className="wrap">
              <span>查看全部</span>
            </span>
              </div>
            </a>
          </div>
          {/*商品格子*/}
          <div className="goodGrid-newItem newPro">
            <ul className="list">
              {
                home.newItemList && home.newItemList.map((newItem, index) => {
                  return (
                    <li className="item" key={index}>
                      <a className="good">
                        <div className="hd">
                          <img src={newItem.primaryPicUrl} alt="玫瑰"/>
                        </div>
                        <div className="tagWraper">
                          <p className="status anniversary">七夕推荐</p>
                          <p className="status gradientPrice">七夕礼物价</p>
                        </div>
                        <div className="name">
                          <span>{newItem.name}</span>
                        </div>
                        <div className="newItemDesc">{newItem.simpleDesc}</div>
                        <div className="price">
                          <span>￥{newItem.retailPrice}</span>
                        </div>
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        {/*人气推荐 · 好物精选*/}
        <div className="indexFloor popularItemList">
          <div className="new-hd">
            <a className="more">
              <span>人气推荐 · 好物精选</span>
              <div className="all">
              <span className="wrap">
                <span>查看全部</span>
              </span>
              </div>
            </a>
          </div>
          {/*商品格子*/}
          <div className="goodGrid-newItem popular">
            <ul className="list">
              {
                home.newItemNewUserList && home.newItemNewUserList.map((newItem, index) => {
                  return (
                    <li className="item" key={index}>
                      <a className="good">
                        <div className="hd">
                          <img src={newItem.primaryPicUrl} alt="玫瑰"/>
                        </div>
                        <div className="tagWraper">
                          <p className="status anniversary">满额减</p>
                        </div>
                        <div className="name">
                          <span>{newItem.name}</span>
                        </div>
                        <div className="newItemDesc">{newItem.simpleDesc}</div>
                        <div className="price">
                          <span>￥{newItem.retailPrice}</span>
                        </div>
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        {/*严选限时购*/}
        <div className="indexFlash">
          <div className="left-item">
            <div className="title">严选限时购</div>
            <div className="countdown">
              <span className="hours">17</span>
              <span className="colon">:</span>
              <span className="mins">18</span>
              <span className="colon">:</span>
              <span className="secs">02</span>
            </div>
            <div className="next-title">
          <span>
            <span>下一场</span>
            <span>18:00</span>
            <span>开始</span>
          </span>
            </div>
          </div>
          <div className="right-item">
            <div>
              <img
                src="http://yanxuan.nosdn.127.net/a1a42111fd2f8bcaeaf321bcd62890ef.png?imageView&quality=85&thumbnail=330x330"
                alt=""/>
            </div>
            <div className="price">
              <div className="price-now28">
                <span className="rmb1">￥</span><span>139</span>
              </div>
              <div className="price-origin28">
                <span className="rmb2">￥</span><span className="t">169</span>
              </div>
            </div>
          </div>
        </div>
        {/*福利社*/}
        <div className="sale">
          <a>1111</a>
        </div>
        {/*专题精选*/}
        <div className="indexFloor choice">
          <div className="hd">
            <a className="more">
              <span>专题精选</span>
              <i className="iconfont icon-yuanjiantou1"></i>
            </a>
          </div>
          <div className="indexTopics-slide">
            <ul className="list">
              {
                home.topicList && home.topicList.map((item, index) => {
                  return (
                    <li className="item" key={index}>
                      <a className="imgWrap">
                        <img src={item.itemPicUrl} alt=""/>
                      </a>
                      <div className="line1">
                        <h4 className="title">{item.title}</h4>
                        <span className="price"><span>{item.priceInfo}元起</span></span>
                        <div className="desc">{item.subtitle}</div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        {/*商品列表*/}
        <GoodList goodGrides={home.cateList}/>
      </div>
    )
  }
}

// 向外暴露是包含UI组件的容器组件
export default connect(
  state => ({
    homeHeaderNav: state.homeHeaderNav,
    homeBanners: state.homeBanners,
    home: state.home,
  }),
  {getHeadNav, getHomeBanner, getHomeData}
)(Home)

/*
组件的render什么时候执行?
1. 初始显示
2. 更新显示
    1). 自身状态变化 : this.setState()
    2). 接收的外部数据属性变化了
 */
