import React from 'react';
import { connect } from 'react-redux';

import JoinForm from '../components/JoinForm';
import { request_create_member, join_form_update } from '../actions';

const JoinFormContainer = ({
	email,
	password,
	inProgressing,
	
	onFormUpdate,
	onRequestJoin
}) => (
	<div className="JoinFormContainer">
		<JoinForm
			email={email}
			password={password}

			inProgressing={inProgressing}
			onFormUpdate={onFormUpdate}
			onRequestJoin={onRequestJoin}
		/>
	</div>
);

const mapStateToProps = (state) => ({
	email: state.member.joinData.email,
	password: state.member.joinData.password,
	inProgressing: state.system.inProgressing
});

const mapActionToProps = (dispatch, action) => ({
	onRequestJoin: (email, password) => dispatch(request_create_member({email, password})),
	onFormUpdate: (email, password) => dispatch(join_form_update({email, password})),
});

export default connect(mapStateToProps, mapActionToProps)(JoinFormContainer);