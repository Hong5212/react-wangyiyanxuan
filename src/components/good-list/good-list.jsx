import React, {Component} from 'react'
import propTypes from 'prop-types'

import './good-list.styl'

class GoodList extends Component {
  static propTypes = {
    goodGrides: propTypes.array
  };
  render() {
    const {goodGrides} = this.props;
    return (
      <div className='goodListWrap'>

        {
          goodGrides && goodGrides.map((goods, index) => {
            return (
              <div className="titleGoodGrid" key={index}>
                <h3 className="title">{goods.name}好物</h3>
                <ul className="list">
                  {
                    goods && goods.itemList.map((good, index) => {
                      return(
                        <li className="item" key={index}>
                          <div className="item-hd">
                            <div className="wraper">
                              <img src={good.listPicUrl} alt="图片"/>
                              <div className="desc">{good.simpleDesc}</div>
                            </div>
                          </div>
                          <p className="status">居家特惠</p>
                          <p className="name">{good.name}</p>
                          <span className="price">￥{good.couponPrice}</span>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default GoodList;