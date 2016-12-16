import React from 'react';
import ReactDOM from 'react-dom';

import { Link, IndexRoute,IndexLink, browserHistory } from 'react-router'

module.exports.PageLayout = React.createClass({
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
					<li><Link to="/profile" activeClassName="active">Profile</Link></li>
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
</main>
    );
  }
})