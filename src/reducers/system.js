import {
	IN_PROGRESSING,
	END_PROGRESSING
} from '../actions/ActionTypes';


const initialState = {
	inProgressing: false
};

export default function systemReducer(state = initialState, action) {

	switch ( action.type ) {
		case IN_PROGRESSING:
			return {
				...state,
				inProgressing: true
			};

		case END_PROGRESSING:
			return {
				...state,
				inProgressing: false
			};

		default:
			return state;
	}
};