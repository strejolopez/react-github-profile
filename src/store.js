import {createStore} from 'redux'
import {githubReducer} from './reducers/reducer'


const store = createStore(githubReducer)
export default store