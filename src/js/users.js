import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Users extends Component {

render(){
	return (
		<div className="users">
	  		
	  		<h1>Github Users</h1>
			  	
			  	<ul>
			  		<Link to="/jisaacks/orgs">
			  		<li>jisaacks</li>
			  		</Link>

			  		<Link to="/sindresorhus/orgs">
			  		<li>sindresorhus</li>
			  		</Link>

			  		<Link to="/addyosmani/orgs">
			  		<li>addyosmani</li>
			  		</Link>

			  		<Link to="/wycats/orgs">
			  		<li>wycats</li>
			  		</Link>

			  		<Link to="/dhh/orgs">
			  		<li>dhh</li>
			  		</Link>
			  	</ul>
  		</div>
	)
}
}