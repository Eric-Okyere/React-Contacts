
let initialState = {
	users: [
		
	],
};

let UsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_NEW_USER":
			return { ...state,  users: action.payload };
		
			case "DELETE_USER":
			const savedUsers = state.users.filter(
				(user) => user.id !== action.payload
			);
			return { ...state, users:  savedUsers };
			
			case "EDIT_USER":
            console.log(action.payload)
				const updatedUsers = state.users.map((user)=>{
					if(user.id === action.payload.newInfo.id){
						return action.payload.newInfo
					}
					else return user
				})
				return { ...state, users: updatedUsers };
				
		default:
			return state;
	}
};

export default UsersReducer;