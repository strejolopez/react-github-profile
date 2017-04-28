import React from 'react';
import {getUser} from '../api/githubapi'
import store from '../store'





const styles = {
  container: {
    display:'flex',
    listStyle:'none',
    marginBottom:100,
    marginLeft:-60
  },
  li: {
    marginLeft:20
  },
}

export default React.createClass({
  getInitialState(){
    return{
      user:[]
    }
  },


  componentWillMount(){
    this.unsubscribe = store.subscribe(()=>{
      const appState = store.getState()
        this.setState({
          user:appState.user,
        })
    })
      getUser()
   },

   componentWillUnmount(){
    this.unsubscribe()
   },

   render(){
       return(
           <div>
              <ul style={styles.container}>
                <li style={styles.li}>Overview</li>
                <li style={styles.li}>Repositories {this.state.user.public_repos}</li>
                <li style={styles.li}>Stars 0</li>
                <li style={styles.li}>Followers {this.state.user.followers}</li>
                <li style={styles.li}>Following {this.state.user.following}</li>
              </ul>
          </div>
        )
   }
})