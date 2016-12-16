import React from 'react';
import ReactDOM from 'react-dom';

module.exports.ticketTable = React.createClass({
  render: function () {
    var ticket = this.props.ticket;
    return (
			 <td>{ticket}</td>
    );
  }
});


