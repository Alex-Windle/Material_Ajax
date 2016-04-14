import React, { Component } from 'react';
import { ajax } from 'jquery';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

////////////Paper style/////////////////////////////
const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperExampleSimple = () => (
  <div>
    <Paper style={style} zDepth={1}/>
    <Paper style={style} zDepth={2}/>
    <Paper style={style} zDepth={3}/>
    <Paper style={style} zDepth={4}/>
    <Paper style={style} zDepth={5}/>
  </div>
);
///////////////////////////////////////////////////
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