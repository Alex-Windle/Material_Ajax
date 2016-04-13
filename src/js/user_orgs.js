import React, { Component } from 'react';
import { ajax } from 'jquery';

export default class UserOrgs extends Component {
	constructor(props){
		super(props);
		this.state = { orgs: [] };
	}

	componentWillMount(){
		let { user_name } = this.props.params;
		ajax(`https://api.github.com/users/${ user_name }/orgs`).then(orgArr=>{
			this.setState({orgs: orgArr});
		})
	}

	userOrgs(org){
		return (
			<li>
				{org.login}
				<img src={org.avatar_url}/>
			</li>
		)
	}
	
	render(){
		let { user_name } = this.props.params;

		// import user url of orgs
		// show an org in each list ite

		let orgs = this.state.orgs;

		return (
			<div className="users">
			<h1>Git Hub Orgs for { user_name }</h1>
				<ul>
					{ orgs.map(::this.userOrgs) }
				</ul>
	  		</div>
		)
	}

}