import React from 'react';
import ReactDOM from 'react-dom';

var max_Char='140';
var style = {color: "#ffaaaa"};

 module.exports.AddTicket = React.createClass({
   getInitialState: function() {
    return {value: '', char_Left: max_Char};
  },
  handleChange: function(event) {
    var input = event.target.value;
    this.setState({value: input.substr(0, max_Char),char_Left: max_Char - input.length});
	if (input.length == max_Char){
		alert("You have reached the max limit")
    }
  },
 handleSubmitEvent: function (event) {
    event.preventDefault();
	
var values  = {
      date: new Date(),
      email: this.refs.email.value.trim(),
      issueType: this.refs.issueType.value,
      department: this.refs.department.value,
      comment: this.state.value
    };
	this.props.addTicketList(values);
	//var oldTickets = JSON.parse(localStorage.getItem('Ticket')) || Array();
	//oldTickets.push(values);
	//console.log(oldTickets.toObject());
	localStorage.setItem('Ticket', JSON.stringify(values));
	
},
render: function() {
  return (
	<form onSubmit={this.handleSubmitEvent}>
		<div className="form-group">
			<label htmlFor="email">Email <span style={style}>*</span></label>
			<input type="text" id="email" ref="email" className="form-control" placeholder="Enter email" required/>
		</div>
		<div className="form-group">
			<label htmlFor="issueType">Issue Type <span style={style}>*</span></label>
			<select className="form-control" id="issueType" ref="issueType" required>
				<option value="">-----Select----</option>
				<option value="Access Related Issue">Access Related Issue</option>
				<option value="Email Related Issues">Email Related Issues</option>
				<option value="Hardware Request">Hardware Request</option>
				<option value="Health & Safety">Health & Safety</option>
				<option value="Network">Network</option>
				<option value="Intranet">Intranet</option>
				<option value="Other">Other</option>
			</select>
		</div>

		<div className="form-group">
			<label htmlFor="department">Assign Department <span style={style}>*</span></label>
			<select className="form-control" id="department" ref="department" required>
				<option value="">-----Select----</option>
				<option value="Admin">Admin</option>
				<option value="HR">HR</option>
				<option value="IT">IT</option>
				<option value="Development">Development</option>
			</select>
		</div>

		<div className="form-group">
			<label htmlFor="comments">Comments <span style={style}>*</span></label>(<span>{this.state.char_Left}</span> characters left)
			<textarea className="form-control" value={this.state.value} maxLength={max_Char} ref="comments" onChange={this.handleChange} />
		</div>
		<div className="btn-group">
			<button type="submit" className="btn btn-primary">Submit</button>
			<button type="reset" className="btn btn-link">cancel</button>
		</div>
	</form>
	);
}
});