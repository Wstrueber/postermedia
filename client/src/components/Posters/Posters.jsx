import React, { useEffect } from 'react'
import PostersWrapper from './components/PostersWrapper/PostersWrapper'
import { withPosters } from '../../context/withPosters'
import { PosterCard } from './components'
import { LoadingSpinner } from '../../common'
import CreatePoster from '../CreatePoster'

const Posters = ({ posters, getPosters, spinner, match: { path } }) => {
	const loadPosters = async () => {
		await getPosters(path)
	}
	useEffect(() => {
		loadPosters()
	}, [])

	return (
		<>
			<div style={{ marginTop: '80px', textAlign: 'center' }}>
				<h1>{path.slice(1, path.length).toUpperCase()}</h1>
			</div>
			<PostersWrapper>
				{spinner ? (
					<LoadingSpinner />
				) : (
					<>
						<CreatePoster path={path} />
						{posters.length > 0 ? (
							posters.map((poster, ind) => (
								<PosterCard content={true} path={path} key={ind} {...poster} />
							))
						) : (
							<>
								<PosterCard content={false} />
							</>
						)}
					</>
				)}
			</PostersWrapper>
		</>
	)
}
export default withPosters(Posters)
