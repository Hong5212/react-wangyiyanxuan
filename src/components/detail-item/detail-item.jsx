import React, {Component} from 'react'
import propTypes from 'prop-types'

import './detail-item.styl'

export default class DetailItem extends Component {
  static propTypes = {
    detail: propTypes.object.isRequired
  }

  render() {
    const {detail} = this.props;

    /*if(!detail.recommendOne){
      return {detail : {}}
    }*/

    return (
      <div className="m-exploreRcmds">

        <div className="container">
          <div className="module-title">{detail.recommendOne && detail.recommendOne.nickname}</div>
          <div className="m-mainPosItem">
            <div className="imgContainer">
              <div className="topicTag">
                <div className="m-exploreTag">{detail.recommendOne && detail.recommendOne.typeName}</div>
              </div>
            </div>
            <div className="topicInfo">
              <div className="line1">
                <div className="title">{detail.recommendOne && detail.recommendOne.typeName}</div>
                <div className="price">{detail.recommendOne && detail.recommendOne.priceInfo}元起</div>
              </div>
            </div>
          </div>
          <div className="m-minorPosItem">
            <div className="topicInfo">
              <div className="author-container">
                <div className="author">
                  <div className="avatar">
                    <img src={detail.recommendTwo && detail.recommendTwo.avatar} alt='avater'/>
                  </div>
                  <div className="nickname">{detail.recommendTwo && detail.recommendTwo.nickname}</div>
                </div>
              </div>
              <div className="line1">
                <div className="title">{detail.recommendTwo && detail.recommendTwo.title}</div>
              </div>
              <div className="line2">
                <div className="subTitle">{detail.recommendTwo && detail.recommendTwo.subTitle}</div>
              </div>
            </div>
            <div className="minorPic">
              <div className="imgContainer">
                <img src={detail.recommendTwo && detail.recommendTwo.picUrl} alt="picUrl"/>
                <div className="topicTag">
                  <div className="m-exploreTag">{detail.recommendTwo && detail.recommendTwo.typeName}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-minorPosItem">
            <div className="topicInfo">
              <div className="author-container">
                <div className="author">
                  <div className="avatar">
                    <img src={detail.recommendThree && detail.recommendThree.avatar} alt='avater'/>
                  </div>
                  <div className="nickname">{detail.recommendThree && detail.recommendThree.nickname}</div>
                </div>
              </div>
              <div className="line1">
                <div className="title">{detail.recommendThree && detail.recommendThree.title}</div>
              </div>
              <div className="line2">
                <div className="subTitle">{detail.recommendOne && detail.recommendOne.subTitle}</div>
              </div>
            </div>
            <div className="minorPic">
              <div className="imgContainer">
                <img src={detail.recommendThree && detail.recommendThree.picUrl} alt="picUrl"/>
                <div className="topicTag">
                  <div className="m-exploreTag">{detail.recommendThree && detail.recommendThree.typeName}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}