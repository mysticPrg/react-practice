import React from 'react';
import { connect } from 'react-redux';

import JoinFormContainer from '../containers/JoinFormContainer';
import CardTable from '../components/CardTable';
import {
	request_readall_member
} from '../actions';

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		props.onRequestReadAll();
	}
	render() {
		return (
			<div className="App">
				<JoinFormContainer inProgressing={this.props.inProgressing}/>
				<CardTable members={this.props.members}/>
				<button
					onClick={this.props.onRequestReadAll}
					disabled={this.props.inProgressing}
				>
					Refresh
				</button>
			</div>
		);
	}
}

const mapStateToProp = state => ({
	members: state.member.members,
	inProgressing: state.member.inProgressing
});

const mapActionToProp = (dispatch, action) => ({
	onRequestReadAll: () => dispatch(request_readall_member())
});

export default connect(mapStateToProp, mapActionToProp)(App);