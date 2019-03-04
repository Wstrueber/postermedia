import React, { useEffect } from 'react'
import { PostersWrapper } from './styled'
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

	return spinner ? (
		<LoadingSpinner />
	) : (
		<>
			<div style={{ marginTop: '80px', textAlign: 'center' }}>
				<h1>{path.slice(1, path.length).toUpperCase()}</h1>
			</div>
			<PostersWrapper>
				{posters.length > 0 ? (
					posters.map((poster, ind) => (
						<PosterCard content={true} path={path} key={ind} {...poster} />
					))
				) : (
					<>
						<PosterCard content={false} />
					</>
				)}
				<CreatePoster path={path} />
			</PostersWrapper>
		</>
	)
}
export default withPosters(Posters)
