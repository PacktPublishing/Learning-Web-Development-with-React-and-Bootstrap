import React from 'react';
import ReactDOM from 'react-dom';

module.exports.ListPanel = 
React.createClass({
  render: function () {
    var item = this.props.item;
    return (
      <div className="panel panel-default">
		<div className="panel-body">
			Emailid: {item.email}<br/>
			IssueType: {item.issueType}<br/>
			IssueType: {item.department}<br/>
			Message: {item.comment}
		</div>
		<div className="panel-footer">
			{item.date.toString()}
		</div>
      </div>
    );
  }
});


