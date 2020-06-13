import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar, faCodeBranch} from "@fortawesome/free-solid-svg-icons";
import {relativeTime} from '../../Utils'
import githubColors from '../../Utils/colors'

import './index.css'

const UserRepo = React.memo(props => {
	return(
		<div className={'user-repo'}>
			<h3>
				<a href={props.repo.url}>{props.repo.name}</a>
			</h3>
			<p className={'repo-description'}>{props.repo.description}</p>
			<div className={'repo-stats'}>
				{
					props.repo.language ? (
						<span className={'repo-language'}>
							<span className={'repo-language-color'} style={{backgroundColor: githubColors[props.repo.language].color}} />
							<span className={'repo-language-name'}>{props.repo.language}</span>
						</span>
					) : ''
				}
				<a className={'stars'} href={props.repo.stargazers_url}>
					<FontAwesomeIcon icon={faStar} /> {props.repo.stargazers_count}
				</a>
				<a className={'forks'} href={props.repo.forks_url}>
					<FontAwesomeIcon icon={faCodeBranch} /> {props.repo.forks_count}
				</a>
				<span className={'relative-date'}>
					Updated {relativeTime(new Date(props.repo.updated_at))}
				</span>
			</div>
		</div>
	)
})

export default UserRepo;
