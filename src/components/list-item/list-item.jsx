import React, {Component} from 'react'
import propTypes from 'prop-types'

import './list-item.styl'

export default class ListItem extends Component {
  static propTypes = {
    categories: propTypes.array,
    currentIndex: propTypes.number
  };

  render() {
    const {categories, currentIndex} = this.props;
    // console.log(currentIndex);

    return (
      <div className="m-subCateList">
        <div className="banner">
          <img src={categories[currentIndex] && categories[currentIndex].bannerUrl} alt="bannerUrl"/>
        </div>
        <div className="cateList">
          <div className="hd">
                  <span className="text">
                    <span>{categories[currentIndex] && categories[currentIndex].name}分类</span>
                  </span>
          </div>
          <ul className="list">
            {
              categories[currentIndex] && categories[currentIndex].subCateList.map((itemCate, index) => {
                return (
                  <li className="cateItem" key={index}>
                    <a>
                      <div className="cateImgWrapper">
                        <img src={itemCate.wapBannerUrl} alt="wapBannerUrl"/>
                      </div>
                      <div className="name">{itemCate.name}</div>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}