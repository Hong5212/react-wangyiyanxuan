import React, {Component} from 'react'
import propTypes from 'prop-types'

import './detail-find-more.styl'

export default class DetailFindMore extends Component {
  static propTypes = {
    findMore: propTypes.array
  };

  render() {
    const {findMore} = this.props;

    return (
      <div>
        <div className="m-exploreMore">
          <div className="line-title">
            <div className="inner">更多精彩</div>
          </div>
          {
            findMore && findMore.map((item, index) => {
              return(
                <div className="content" key={index}>
                  <div className="topicItem">
                    <div className="imgContainer pic1">
                      <img src={item.itemPicUrl} alt="priUrl"/>
                    </div>
                    <div className="desc">夏天是出游的季节，进入7月，好像大家都开启了度假模式。</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}