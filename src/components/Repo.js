import React from 'react';
import {getRepo, getUser} from '../api/githubapi'
import store from '../store'



const styles = {
	a: {
		textDecoration:'none',
		color:'black',
		borderBottom:'solid rgb(225, 227, 223)',
		PaddingTop:40,
		width:1000
	},
	width: {
		width:1000
	},
	ul: {
		listStyle:'none'
	}
}

export default React.createClass({

	getInitialState(){
		return{
			repo: []
   }
},
	componentWillMount(){
		this.unsubscribe = store.subscribe(()=>{
			const appState = store.getState()
			this.setState({
				repo:appState.repo,
				user:appState.user
		})
	})
	getRepo()

   },

   componentWillunMount(){
   	this.unsubscribe()

   },

render (){
	return(
		<div>
		{this.state.repo.map(repo=>(
		<div key={'repo' + repo.id} className="repo">
			<h1 style={styles.width}><a style={styles.a} className="repoTitle" href={repo.svn_url}>{repo.name}</a></h1>
			<div>
			<ul style={styles.ul}>
				<li> {repo.language}</li>
				<li> {repo.forks_count} </li>
				<li>updated at {repo.updated_at} </li>
			</ul>
			</div>
			</div>

			))}
		</div>
		)
	}
})
