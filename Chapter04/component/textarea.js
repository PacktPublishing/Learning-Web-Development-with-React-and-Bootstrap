var max_Char='140';
var style = {color: "#ffaaaa"};
var Teaxtarea = React.createClass({
  getInitialState: function() {
    return {value: 'Controlled!!!', char_Left: max_Char};
  },
  handleChange: function(event) {
    var input = event.target.value;
    this.setState({value: input.substr(0, max_Char),char_Left: max_Char - input.length});
  },
render: function() {
  return (
		<div className="form-group">
			<label htmlFor="comments">Comments <span style={style}>*</span></label>(<span>{this.state.char_Left}</span> characters left)
			<textarea className="form-control" value={this.state.value} maxLength={max_Char} onChange={this.handleChange} />
		</div>
	);
}
});
ReactDOM.render(
  <Teaxtarea />,
  document.getElementById('textarea')
);