import React from 'react';
import PropTypes from 'prop-types';

class ArticleItem extends React.Component {

  render() {
    return (
      <div className="card">
        <div className="card-body article_body">
          <div className='row'>
            <h5>{this.props.article.title}</h5>
            
            <p dangerouslySetInnerHTML ={{__html:this.props.article.content}}/> 
          </div>
        </div>
      </div>
    );
  }
}


ArticleItem.propTypes = {
  article: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
  })
};

export default ArticleItem;
