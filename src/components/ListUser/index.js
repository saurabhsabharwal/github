import React from 'react'
import {Link} from 'react-router-dom'

import './index.css'

const ListUser = React.memo(props => {
	return (
		<div className={'list-user'}>
			<div className={'user-avatar'}>
				<Link to={`/user/${props.user.login}`}>
					<img alt={props.user.login} src={props.user.avatar_url}/>
				</Link>
			</div>
			<div className={'user-info'}>
				<Link to={`/user/${props.user.login}`}>
					{props.user.login}
				</Link>
				{/*<span>*/}
				{/*	Username*/}
				{/*</span>*/}
			</div>
		</div>
	)
})

export default ListUser
