import React, {Component} from 'react'
import {connect} from 'react-redux'
import BScroll from 'better-scroll'

import {getClassifyData} from '../../redux/actions'
import ListItem from '../../components/list-item/list-item'

import './classify.styl'

class Classify extends Component {
  state = {
    currentIndex: 0
  };

  componentDidMount() {
    this.props.getClassifyData(() => {
      new BScroll('.m-cateNavVertWrap', {
        click: true
      })
    })
  }

  changeIndex = index => {
    this.setState({
      currentIndex : index
    })
  };

  render() {
    const {categories} = this.props;

    let {currentIndex} = this.state

    return (
      <div className="j-categoryList">
        {/*头部*/}
        <div className="hdWraper">
          <div className="m-hd">
            <div className="m-itemCateListHd">
              <div className="m-topSearchIpt ipt">
                <i className="icon"></i>
                <span className="placeholder">搜索商品, 共11963款好物</span>
              </div>
            </div>
          </div>
        </div>
        {/*左侧导航*/}
        <div className="m-cateNavVertWrap">
          <ul className="m-cateNavVert">
            {
              categories && categories.map((category, index) => {
                return (
                  <li className={`item ${index === currentIndex?'active':''}`}
                      key={index} onClick={() => this.changeIndex(index)}>
                    <a className="txt">{category.name}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        {/*右侧列表*/}
        <ListItem categories={categories} currentIndex={currentIndex}/>
      </div>
    )
  }
}

export default connect(
  state => ({
    categories: state.categories
  }),
  {getClassifyData}
)(Classify)