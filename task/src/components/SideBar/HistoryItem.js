import React from 'react';
import PropTypes from 'prop-types';

class HistoryItem extends React.Component {
  remove = (e) => {
    e.stopPropagation();
    this.props.remove();
  }

  render() {
    return (
      <div className={this.props.active ? 'active HistoryItem card' : 'HistoryItem card'} onClick={this.props.updateActive}>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-8'>
              <p>{this.props.item.keyword}</p>
            </div>

            <div className='col-md-4'>
              <button type="button" className="close" aria-label="Close" onClick={this.remove}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HistoryItem.propTypes = {
  item: PropTypes.shape({
    keyword: PropTypes.string.isRequired,
  }).isRequired,
  active: PropTypes.bool.isRequired,
  updateActive: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
}

export default HistoryItem;
