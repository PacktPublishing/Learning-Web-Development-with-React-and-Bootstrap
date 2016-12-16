var React = require("react");
import { AddTicket } from "./addTicketForm.js";
import { List } from "./listView.js";

module.exports.AddTicketsForm = React.createClass({
  
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

