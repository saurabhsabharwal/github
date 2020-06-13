import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import UserRepo from '../UserRepo'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'

import {Helmet} from 'react-helmet'

import {fetchUserDetails} from '../../store/actions'

import './index.css'

const UserDetails = React.memo(props => {
		const user = useParams('username');
		const [username] = useState(user.username);

		useEffect(() => {
			props.fetchDetails(username)
		}, [username]);

		return (
			<>
				<Helmet>
					<title>{`${props.user.hasOwnProperty('name') ? props.user.name : ''} Profile | Github`}</title>
				</Helmet>
				<div className={'user-details-container'}>
					<div className={'user-avatar'}>
						{
							props.user.hasOwnProperty('login') ? (
								<>
									<img alt={props.user.name} src={props.user.avatar_url}/>
									<h1 className={'user-names'}>
										<span className={'user-name'}>{props.user.name}</span>
										<span className={'user-username'}>{props.user.login}</span>
									</h1>
								</>
							) : (
								<div className={'spinner'}>
									<FontAwesomeIcon icon={faSpinner} spin size={'3x'} />
								</div>
							)
						}
					</div>
					<div className={'user-repositories'}>
						{
							props.user.hasOwnProperty('login') ? props.user.hasOwnProperty('repos') ? props.user.repos.map((repo, i) => <UserRepo repo={repo} key={i} />) : <div className={'spinner'}><FontAwesomeIcon icon={faSpinner} spin size={'3x'} /></div> : ''
						}
					</div>
				</div>
			</>
		);
})

const mapStateToProps = state => ({
	user: state.UserDetailsReducer.details
});

const mapDispatchToProps = dispatch => ({
	fetchDetails: username => dispatch(fetchUserDetails(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
