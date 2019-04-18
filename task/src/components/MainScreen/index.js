import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import { connect } from 'react-redux';
import { updateActive } from '../../actions/';

class Home extends Component {
  state = {
    url: '',
    data: [],
    title: '',
    error: '',
  }

  
  componentDidMount() {
    if (this.props.feed_history.list) {

      if (this.props.location.pathname.substring(1).length === 36) {
        let foundItem = this.props.feed_history.list.filter((item) => {
          return item.id === this.props.location.pathname.substring(1);
        });
  
        if (foundItem.length) {
          this.loadUrlContent(foundItem[0].url, foundItem[0].keyword);
        }
      } else {

        let foundItem = this.props.feed_history.list.filter((item) => {
          return item.id === this.props.feed_history.active;
        });

        if (foundItem.length) {
          this.loadUrlContent(foundItem[0].url, foundItem[0].keyword);
        }

      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location !== nextProps.location) {
      let foundItem = nextProps.feed_history.list.filter((item) => {
        return item.id === nextProps.location.pathname.substring(1);
      });

      if (foundItem.length) {
        debugger
        this.props.updateActive(nextProps.location.pathname.substring(1));
        this.loadUrlContent(foundItem[0].url, foundItem[0].keyword);
      } else {
        this.setState({ data: [], title: '', url: '', error: '' });
      }
    } else {
      this.setState({ data: [], title: '', url: '', error: '' });
    }
  }

  loadUrlContent(url, keyword) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
       
        console.log(data.items);

        this.setState({
          data:data.items.map((article)=>{
            console.log(article);
            return article;
          }),
          url:url
        })

        
        });
     
     
  }

  render() {

    return (
      
      <div>
        <h3>{this.state.title}</h3>
        <div>
          {this.state.title && (this.state.data.length < 1) ? (
            <p>No matches found...</p>
          ) : (
            <ArticleList articles={this.state.data} />
          ) }
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  feed_history: PropTypes.shape({
    list: PropTypes.array.isRequired,
    active: PropTypes.string.isRequired
  }).isRequired,
  updateActive: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    feed_history: state.history
  };
}

export default connect(mapStateToProps, { updateActive })(Home);
