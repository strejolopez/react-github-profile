const Initialstate = {
	user: [],
	repo: []
	
}

export function githubReducer(state = Initialstate, action) {
	switch(action.type){
	case 'GET_USER':
		return {
			...state,
			user: action.user,

		}
	case 'GET_REPO':
		return {
			...state, 
			repo: action.repo
		}
	default:
		return state

	}
}