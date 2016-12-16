var { Router, Route, IndexRoute,IndexLink, Link, browserHistory } = ReactRouter
	
var PageLayout = React.createClass({
	render: function() {
	return ( 
<main>
	<div className="navbar navbar-default navbar-static-top" role="navigation">
		<div className="container">
			<div className="navbar-header">
				  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				  </button>
				  <Link className="navbar-brand" to="/">EIS</Link>
				</div>
				<div className="navbar-collapse collapse">
				  <ul className="nav navbar-nav">
					<li><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
					<li><Link to="/edit" activeClassName="active">Edit Profile</Link></li>
					<li>
						<IndexLink activeClassName='active' to=
						{{ pathname: '/query', query: { message: 'Hello from Route Query' } }}>
							Route Query
						</IndexLink>
					</li>
					<li className="dropdown">
					  <Link to="#" className="dropdown-toggle" data-toggle="dropdown">Help Desk <b className="caret"></b></Link>
					  <ul className="dropdown-menu">
						<li><Link to="/alltickets">View Tickets</Link></li>
						<li><Link to="/newticket">New Ticket</Link></li>
					  </ul>
					</li>
				  </ul>
				</div>
			</div>
		</div>
		<div className="container">
			<h1>Welcome to EIS</h1>
				<hr/>
			<div className="row">
				<div className="col-md-12 col-lg-12">
					{this.props.children}
				</div>
			</div>
		</div>
</main>)
	}
})
var RightSection = React.createClass({
  render: function() {
    return (<div className="col-sm-9 profile-desc" id="main"> 
			<div className="results"> 
				<PageTitle/>
				<HomePageContent/>
			</div>
		</div>)
  }
})
var ColumnLeft = React.createClass({
  render: function() {
    return (
      <div className="col-sm-3" id="sidebar">
        <div className="results">
			<LeftSection/>
        </div>
      </div>
      )
  }
})
var LeftSection = React.createClass({
  render: function() {
    return (
		React.DOM.ul({ className: 'list-group' },
		React.DOM.li({className:'list-group-item text-muted'},'Profile'),
		React.DOM.li({className:'list-group-item'},
			React.DOM.a({className:'center-block text-center',href:'#'},'Image')
			),
		React.DOM.li({className:'list-group-item text-right'},'2.13.2014',
		React.DOM.span({className:'pull-left'},
		React.DOM.strong({className:'pull-left'},'Joining Date')
		),
			React.DOM.div({className:'clearfix'})
		))					   
    )
  }
})
var TwoColumnLayout = React.createClass({
  render: function() {
    return (
      <div>
			<ColumnLeft/>
			<RightSection/>
      </div>
      )
  }
})
var PageTitle = React.createClass({
  render: function() {
    return (
		<h2>Home</h2>
	);
  }
});
var HomePageContent = React.createClass({
  render: function() {
    return (
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. urna neque, ultricies a rutrum ac, commodo eget ante. 
		Nullam ut mi erat. Nunc porttitor dignissim luctus. Curabitur iaculis mi neque, a condimentum nunc molestie eu. 
		Phasellus consectetur nisi a elit ornare volutpat. Donec sit amet vestibulum lorem, eget tempor felis. 
		Mauris quam est, varius et venenatis ac, dapibus sed elit. 
		Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
		Phasellus vel purus iaculis, vehicula sem vel, porta enim. 
		Nullam est massa, sagittis ac dapibus quis, accumsan ut nisl. 
		Sed sed egestas risus, ut finibus nisl. Praesent vitae elit nisi. Suspendisse potenti.</p>
	);
  }
});
var Edit = React.createClass({
  render: function() {
    return (<h1>Edit Page</h1>);
  }
});
var allTickets = React.createClass({
  render: function() {
    return (<h1>List of tickets</h1>);
  }
});
var addNewTicket = React.createClass({
  render: function() {
    return (<h1>Submit your Ticket</h1>);
  }
});
var NoMatch = React.createClass({
  render: function() {
    return (<h1>URL not Found</h1>);
  }
});
var QueryRoute = React.createClass({
  render: function(props) {
    return (<h2>{this.props.location.query.message}</h2>);
  }
});
ReactDOM.render((
    <Router>
    <Route path="/" component={PageLayout}>
		<IndexRoute component={TwoColumnLayout}/>
		<Route path="/edit" component={Edit} />
		<Route path="/alltickets" component={allTickets} />
		<Route path="/newticket" component={addNewTicket} />
		<Route path='/query' component={QueryRoute} />
	</Route>
	<Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('reactapp'));