import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Users from './users';
import UserOrgs from './user_orgs';

render((
	<Router history={ hashHistory }>
		<Route path="/" component={ Users }/>
		<Route path="/:user_name/orgs" component={ UserOrgs }/>
	</Router>
	), document.querySelector('.app'));