var NavbarHTML = 
	<nav className="navbar navbar-default navbar-static-top" role="navigation">
	  <div className="container">
		<div className="navbar-header">
		  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
			<span className="sr-only">Toggle navigation</span>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
		  </button>
		  <Link className="navbar-brand" to="#">EIS</Link>
		</div>
		<div className="navbar-collapse collapse">
		  <ul className="nav navbar-nav">
			<li className="active"><Link to="#/">Home</Link></li>
			<li><Link to="/edit">Edit Profile</Link></li>
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
	</nav>
  ReactDOM.render(NavbarHTML,document.getElementById('nav'));