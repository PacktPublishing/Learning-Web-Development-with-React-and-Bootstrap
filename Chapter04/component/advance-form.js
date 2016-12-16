var style = {color: "#ffaaaa"};
var AddTicketsForm = React.createClass({
  
  getInitialState: function () {
    return {
      list: {}
    };
  },
  updateList: function (newList) {
    this.setState({
      list: newList
    });
  },

  addTicketList: function (item) {
    var list = this.state.list;

    list[item] = item;

    this.updateList(list);
  },
render: function () {
    var items = this.state.list;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <List items={items} />
            <AddTicket addTicketList={this.addTicketList} />
          </div>
        </div>
      </div>
    );
  }
});
var ListPanel = React.createClass({
  
  render: function () {
    var item = this.props.item;
    return (
      <div className="panel panel-default">
		<div className="panel-body">
			{item.issueType}<br/>
			{item.email}<br/>
			{item.comment}
		</div>
		<div className="panel-footer">
			{item.date.toString()}
		</div>
      </div>
    );
  }
});

  var List = React.createClass({

  getListOfIds: function (items) {
    return Object.keys(items);
  },

  createListElements: function (items) {
    var item;

    return (
      this
      .getListOfIds(items)
      .map(function createListItemElement(itemId) {
        item = items[itemId];
        return (<ListPanel item={item} />);//key={item.id}
      }.bind(this))
      .reverse()
    );
  },
    render: function () {
    var items = this.props.items;
    var listItemElements = this.createListElements(items);

    return (
      <div className={listItemElements.length > 0 ? "":"bg-info"}>
          {listItemElements.length > 0 ? listItemElements : "You have not raised any ticket yet. Fill this form to submit the ticket"}
      </div>
    );
  }
});

 var AddTicket = React.createClass({
 handleSubmitEvent: function (event) {
    event.preventDefault();
	
var values  = {
      date: new Date(),
      email: this.refs.email.value.trim(),
      issueType: this.refs.issueType.value.trim(),
      department: this.refs.department.value.trim(),
      comment: this.refs.comment.value.trim()
    };
	this.props.addTicketList(values);
},
render: function() {
  return (
	<form onSubmit={this.handleSubmitEvent}>
		<div className="form-group">
			<label htmlFor="email">Email <span style={style}>*</span></label>
			<input type="text" id="email" className="form-control" placeholder="Enter email" required ref="email"/>
		</div>
		<div className="form-group">
			<label htmlFor="issueType">Issue Type <span style={style}>*</span></label>
			<select className="form-control" id="issueType" required ref="issueType">
				<option value="test">-----Select----</option>
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
			<select className="form-control" id="department" required ref="department">
				<option value="">-----Select----</option>
				<option value="Admin">Admin</option>
				<option value="HR">HR</option>
				<option value="IT">IT</option>
				<option value="Development">Development</option>
			</select>
		</div>

		<div className="form-group">
			<label htmlFor="comments">Comments <span style={style}>*</span></label>
			<textarea className="form-control" rows="3" id="comment" required ref="comment"></textarea>
		</div>
		<div className="btn-group">
			<button type="submit" className="btn btn-primary">Submit</button>
			<button type="reset" className="btn btn-link">cancel</button>
		</div>
	</form>
	);
}
});

ReactDOM.render(
  <AddTicketsForm />,
  document.getElementById('form')
);