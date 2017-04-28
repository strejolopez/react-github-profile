import React from 'react';
import Profile from './Profile'
import Repo from './Repo'
import User from './User'


const styles = {
  container: {
    display:'flex',
    paddingLeft:80,
    paddingTop:60
  },
  right: {
  	paddingLeft:50,
  	paddingTop:20,
  	width:1000
  },
  top: {
  	marginTop:310
  }
}



export default React.createClass({
  render() {
    return (
		<div style={styles.container}>
      <Profile />
      <div style={styles.right}>
      	<User  />
      	<div styles={styles.top}>
      		<Repo />
      	</div>
      </div>
		</div>
		)
	}
})