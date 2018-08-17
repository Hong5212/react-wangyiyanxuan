import React, {Component} from 'react'
import propTypes from 'prop-types'
import BScroll from 'better-scroll'

import './detail-scroll.styl'

class DetailScroll extends Component {
  static propTypes = {
    articles: propTypes.array
  };

  componentDidMount(){
    new BScroll('.m-exploreChannels', {
      click: true,
      scrollX: true
    })
  }

  render() {
    const {articles} = this.props;
    // console.log(articles);

    return (
      <div className="m-exploreChannels">
        <div className="list">
          {
            articles && articles.map((article, index) => {
              return (
                <div className="item" key={index}>
                  <div className="imgContainer">
                    <img src={article.picUrl} alt="picUrl"/>
                  </div>
                  <div className="rbGradient">
                    <div className="topNum">{article.articleCount}</div>
                  </div>
                  <div className="title">{article.title}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
export default DetailScroll;