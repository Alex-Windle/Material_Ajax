import React, { Component } from 'react';
import { Link } from 'react-router';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

////////////////List style, icons left / right //////
const ListExampleSimple = () => (
  <MobileTearSheet>
    <List>
      <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
      <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
      <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
      <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
      <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
    </List>
    <Divider />
    <List>
      <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
    </List>
  </MobileTearSheet>
);

export default ListExampleSimple;
/////////////////////////////////////////////////////

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