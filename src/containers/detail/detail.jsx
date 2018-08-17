import React, {Component} from 'react'
import {connect} from 'react-redux'

import Swiper from 'swiper'

import {getDetailData} from '../../redux/actions'

import ShiwuHeader from '../../components/shiwu-header/shiwu-header'
import DetailScroll from '../../components/detail-scroll/detail-scroll'
import DetailItem from '../../components/detail-item/detail-item'
import DetailFindMore from '../../components/detail-find-more/detail-find-more'

import './detail.styl'

class Detail extends Component {

  componentDidMount() {
    this.props.getDetailData(() => {
      new Swiper('.swiper-container')
    })
  }

  render() {
    const {detail} = this.props;
    return (
      <div>
        <ShiwuHeader/>
        {/*轮播图*/}
        <div className="swiper-container detLbt">
          <div className="swiper-wrapper">
            {
              detail.banner && detail.banner.map((item, index) => {
                return(
                  <div className="swiper-slide" key={index}>
                    <img src={item.picUrl} alt='picUrl'/>
                    <div className="content">
                      <div className="subTitle">{item.subTitle}</div>
                      <div className="title">{item.title}</div>
                      <div className="desc">{item.desc}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <DetailScroll articles={detail.column}/>
        <DetailItem detail={detail}/>
        <DetailFindMore findMore = {detail.findMore}/>
      </div>
    )
  }
}

export default connect(
  state => ({
    detail: state.detail
  }),
  {getDetailData}
)(Detail)