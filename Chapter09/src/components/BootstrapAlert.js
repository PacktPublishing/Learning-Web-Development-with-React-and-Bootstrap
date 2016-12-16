import React from 'react';
import ReactDOM from 'react-dom';

module.exports.BootstrapAlert = React.createClass({

  componentDidMount: function() {
    // When the component is added
    $(this.refs.alertMsg).hide();
	console.log("Alert component mount");

    // Bootstrap's alert class exposes a few events for hooking into modal
    // functionality. Lets hook into one of them:
    $(this.refs.alertMsg).on('closed.bs.alert', this.handleClose);
  },
  componentWillUnmount: function() {
    $(this.refs.alertMsg).off('closed.bs.alert', this.handleClose);
  },
  show: function() {
    $(this.refs.alertMsg).show();
  },
  close: function() {
    $(this.refs.alertMsg).alert('close');
  },
  hide: function() {
    $(this.refs.alertMsg).hide();
  },

  render: function() {
    return (
		<div className={(this.props.className) + ' alert'} role="alert" ref="alertMsg"> 
			<button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.handleClose}>
				<span aria-hidden="true">×</span></button> 
				<strong>Oops!</strong> You reached the max limit 
		</div>
		
    );
  }
});