import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

class HistoryList extends React.Component {
  render() {
    return (
      <div>
        {this.props.feed_history.list.map((historyEntry) => (
          <HistoryItem
            key={historyEntry.id}
            item={historyEntry}
            active={this.props.feed_history.active === historyEntry.id ? true : false}
            remove={this.props.remove(historyEntry.id)}
            updateActive={this.props.updateActive(historyEntry.id)}
          />
        ))}
      </div>
    );
  }
}

HistoryList.propTypes = {
  feed_history: PropTypes.shape({
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        keyword: PropTypes.string.isRequired,
        url: PropTypes.string
      }).isRequired
    ).isRequired,
    active: PropTypes.string.isRequired
  }).isRequired,
  updateActive: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
}

export default HistoryList;
