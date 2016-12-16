'use strict';

var max_Char='140';
var style = {color: "#ffaaaa"};

var BootstrapAlert = React.createClass({

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

var Teaxtarea = React.createClass({
  getInitialState: function() {
    return {value: '', char_Left: max_Char};
  },
  handleChange: function(event) {
    var input = event.target.value;
    this.setState({value: input.substr(0, max_Char),char_Left: max_Char - input.length});
	if (input.length == max_Char){
		this.refs.alertBox.show();
    }
	else{
		this.refs.alertBox.hide();
	}
  },
    handleClose: function() {
      this.refs.alertBox.close();
  },
  
render: function() {
var alertBox = null;
    alertBox = (
		<BootstrapAlert className="alert-warning fade in" ref="alertBox"/>
	  );
  return (
	<div className="example">
	{alertBox}
		<div className="form-group">
			<label htmlFor="comments">Comments <span style={style}>*</span></label>(<span>{this.state.char_Left}</span> characters left)
			<textarea className="form-control" value={this.state.value} maxLength={max_Char} onChange={this.handleChange} />
		</div>
	</div>
	);
}
});
ReactDOM.render(
  <Teaxtarea />,
  document.getElementById('alert')
);