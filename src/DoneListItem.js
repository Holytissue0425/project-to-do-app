import React, { Component } from 'react';
import './css/DoneListItem.css';

class DoneListItem extends Component {
  render() {
    const {
      title,
      description,
      ...props 
    } = this.props;

    return (
      <div className="DoneListItem" {...props}>
        <div className="DoneListItem-title">{title}</div>
        <div className="DoneListItem-description">{description}</div>
      </div>
    );
  }
}

export default DoneListItem;