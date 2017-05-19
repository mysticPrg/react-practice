import { combineReducers } from 'redux';

import system from './system';
import member from './member';


export default combineReducers({
	system,
	member
});