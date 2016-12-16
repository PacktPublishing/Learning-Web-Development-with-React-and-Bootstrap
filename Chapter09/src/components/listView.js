import React from 'react';
import ReactDOM from 'react-dom';

import { ListPanel } from "./ListUI.js";

module.exports.List = React.createClass({

  getListOfIds: function (items) {
    return Object.keys(items);
  },

  createListElements: function (items) {
    var item;

    return (
      this
      .getListOfIds(items)
      .map(function createListItemElement(itemId,id) {
        item = items[itemId];
        return (<ListPanel key={id} item={item} />);
      }.bind(this))
      .reverse()
    );
  },
    render: function () {
    var items = this.props.items;
    var listItemElements = this.createListElements(items);

    return (
      <div className={listItemElements.length > 0 ? "":""}>
          {listItemElements.length > 0 ? listItemElements : ""}
      </div>
    );
  }
});