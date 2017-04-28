import React from 'react';
import {getUser} from '../api/githubapi'
import store from '../store'



const styles = {
  img: {
    width:200,
    height:200
  },
  ul: {
    listStyle:'none',
    paddingLeft:'inherit'
  },
  name: {
    fontWeight:'bold',
    fontSize:20,
    paddingBottom:10
  },
  words: {
    paddingBottom:10
  },
  new: {
    borderBottom:'solid rgb(225, 227, 223)',
    paddingBottom:10
  },
  bio: {
    paddingTop:50
  }
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
             <img style={styles.img} src={this.state.user.avatar_url} alt="Sajid Trejo" />
              <ul style={styles.ul}>
                <li style={styles.name}>{this.state.user.name}</li>
                <li style={styles.words}>{this.state.user.login}</li>
                <li style={styles.new}>{this.state.user.bio}</li>
                <li style={styles.words} style={styles.bio}>{this.state.user.location}</li>
              </ul>
          </div>
        )
   }
})