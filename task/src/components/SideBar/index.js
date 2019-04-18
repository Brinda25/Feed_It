import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToHistory, removeFromHistory, updateActive } from '../../actions/';
import HistoryList from './HistoryList';


function generateApiUrl(query) {
    console.log(query);
  return query;
}

class SideBar extends React.Component {
  state = {
    keyword: '',
  }

  handleInput = (e) => {
    this.setState({ keyword: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.keyword.length > 0) {
      let item_id = this.props.addToHistory(this.state.keyword, generateApiUrl(this.state.keyword));
      this.props.history.push('/'+item_id);
    }
  }

  remove = (id) => () => {
    this.props.removeFromHistory(id);
    this.props.history.replace('/');
  }

  updateActive = (id) => () => {
    this.props.updateActive(id);
    this.props.history.push('/'+id);
  }

  render() {
    return (
      <div className={this.props.className}>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input className="form-control" type="text" placeholder="search" value={this.state.keyword} onChange={this.handleInput} />
            <span className="input-group-btn">
              <button className="btn btn-secondary"><span role="img" aria-label="search icon">&#128270;</span></button>
            </span>
          </div>
        </form>

        <div className="formBottomDivider">
        </div>

        <HistoryList
          feed_history={this.props.feed_history}
          remove={this.remove}
          updateActive={this.updateActive}
        />
      </div>
    );
  }
}

SideBar.propTypes = {
  feed_history: PropTypes.shape({
    list: PropTypes.array.isRequired,
    active: PropTypes.string.isRequired
  }).isRequired,
  addToHistory: PropTypes.func.isRequired,
  removeFromHistory: PropTypes.func.isRequired,
  updateActive: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    feed_history: state.history
  };
}

export default connect(mapStateToProps, { addToHistory, removeFromHistory, updateActive })(withRouter(SideBar));
