import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import ArticleItem from './ArticleItem';

class ArticleList extends React.Component {
  render() {
    return (
      <div>
        {this.props.articles.map((article) => (
          <ArticleItem
            key={uuidv4()}
            article={article}
          />
        ))}
      </div>
    );
  }
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArticleList;
