import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute,IndexLink, browserHistory } from 'react-router'
import { PageLayout } from "./components/navbar.js";
import { AddTicketsForm } from "./components/addTicketList.js";
import { Profile } from "./components/editView.js";
import { NoMatch } from "./components/noURLFound.js";
const ListUI = require("./components/listView.js");
import { allTickets } from "./components/allTickets.js";

import '../css/custom.css';
import '../vendor/css/base.css';
import '../vendor/css/bootstrap.min.css';

import '../vendor/js/bootstrap.min.js';

const RightSection = React.createClass({
  render: function() {
    return (<div className="col-sm-9 profile-desc" id="main"> 
			<div className="results"> 
				<PageTitle/>
				<HomePageContent/>
			</div>
		</div>)
  }
})
const ColumnLeft = React.createClass({
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
const LeftSection = React.createClass({
  render: function() {
    return (
		React.DOM.ul({ className: 'list-group' },
		React.DOM.li({className:'list-group-item text-muted'},'Profile'),
		React.DOM.li({className:'list-group-item'},
			React.DOM.a({className:'center-block text-center profile-img',href:'#'},'')
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
const TwoColumnLayout = React.createClass({
  render: function() {
    return (
      <div>
			<ColumnLeft/>
			<RightSection/>
      </div>
      )
  }
})
const PageTitle = React.createClass({
  render: function() {
    return (
		<h2>Home</h2>
	);
  }
});
const HomePageContent = React.createClass({
  render: function() {
    return (
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. urna neque, ultricies a rutrum ac, commodo eget ante. 
		Nullam ut mi erat. Nunc porttitor dignissim luctus. Curabitur iaculis mi neque, a condimentum nunc molestie eu. 
		Phasellus consectetur nisi a elit ornare volutpat. Donec sit amet vestibulum lorem, eget tempor felis. 
		Mauris quam est, constius et venenatis ac, dapibus sed elit. 
		Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
		Phasellus vel purus iaculis, vehicula sem vel, porta enim. 
		Nullam est massa, sagittis ac dapibus quis, accumsan ut nisl. 
		Sed sed egestas risus, ut finibus nisl. Praesent vitae elit nisi. Suspendisse potenti.</p>
	);
  }
});

ReactDOM.render((
    <Router history={browserHistory}>
    <Route path="/" component={PageLayout}>
		<IndexRoute component={TwoColumnLayout}/>
		<Route path="/profile" component={Profile} />
		<Route path="/alltickets" component={allTickets} />
		<Route path="/newticket" component={AddTicketsForm} />
	</Route>
	<Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('root'));