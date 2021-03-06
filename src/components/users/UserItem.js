import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url } }) => {
		return (
			<div className="card text-center">
				<img src={ avatar_url } alt='' className='round-img' style={{ width: '80px' }} />
				<h3>{ login }</h3>
			</div>
		)
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
}

export default UserItem;