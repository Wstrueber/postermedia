import React, { useState, useEffect } from 'react'
import { PostersWrapper } from './styled'
import { withPosters } from '../../context/withPosters'
import { PosterCard } from './components'

const Posters = ({ posters, getPosters, match: { path } }) => {
	const [newPosters, setNewPosters] = useState(posters)

	useEffect(() => {
		getPosters(path)
	}, [])
	useEffect(() => {
		setNewPosters(posters)
	}, [posters])

	return (
		<>
			<div style={{ marginTop: '80px', textAlign: 'center' }}>
				<h1>{path.slice(1, path.length).toUpperCase()}</h1>
			</div>
			<PostersWrapper>
				{newPosters.length > 0 ? (
					newPosters.map((poster, ind) => (
						<PosterCard content={true} path={path} key={ind} {...poster} />
					))
				) : (
					<>
						<PosterCard content={false}>No Posters</PosterCard>
					</>
				)}
			</PostersWrapper>
		</>
	)
}
export default withPosters(Posters)
