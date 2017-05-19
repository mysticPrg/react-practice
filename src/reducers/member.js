import {
	CREATE_MEMBER,
	JOIN_FORM_UPDATE,
	READALL_MEMBER
} from '../actions/ActionTypes';


const initialState = {
	members: [],
	joinData: {
		email: '',
		password: ''
	}
};

export default function memberReducer(state = initialState, action) {

	const { members } = state;

	switch ( action.type ) {
		case CREATE_MEMBER:
			return {
				...state,
				joinData: {
					email: '',
					password: '',
				},
				members: [
					...members,
					{
						id: action.id,
						email: action.email,
						password: action.password
					}
				]
			};

		case JOIN_FORM_UPDATE:
			return {
				...state,
				joinData: {
					email: action.email,
					password: action.password
				}
			};

		case READALL_MEMBER:
			return {
				...state,
				members: action.members.slice(0, action.members.length),
			};

		default:
			return state;
	}
};