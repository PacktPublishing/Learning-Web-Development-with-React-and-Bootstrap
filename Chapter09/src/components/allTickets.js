import React from 'react';
import ReactDOM from 'react-dom';
const table = require("./ticketTable.js");

module.exports.allTickets = React.createClass({
 getInitialState: function() {
    return {value :JSON.parse(localStorage.getItem( 'Ticket' )) || 1};
},
  getListOfIds: function (tickets) {
    return Object.keys(tickets);
  },

  createListElements: function (tickets) {
    var ticket;
    return (
      this
      .getListOfIds(tickets)
      .map(function createListItemElement(ticket,id) {
        ticket = tickets[ticket];
        return (<table.ticketTable key={id} ticket={ticket}/>)
      }.bind(this))
    );
  },
render: function() {
  var ticket = this.state.value;
  var listItemElements = this.createListElements(ticket);
    return (
      <div>
		<div className={listItemElements.length > 0 ? "":"bg-info"}>
			{listItemElements.length > 0 ? "" : "You have not raised any ticket yet."}
		</div>
		  <table className="table table-striped table-responsive">
			   <thead>
				  <tr>
					 <th>Date</th>
					 <th>Email ID</th>
					 <th>Issue Type</th>
					 <th>Department</th>
					 <th>Message</th>
				  </tr>
			   </thead>
			   <tbody>
					<tr>
						{listItemElements.length > 0 ? listItemElements : ""}
					</tr>
				</tbody>
			</table>
      </div>
    );
  }
});