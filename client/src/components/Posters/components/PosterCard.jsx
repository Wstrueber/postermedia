import React, { useState, useEffect } from 'react'
import { StyledCard, ButtonContainer } from './styled'
import { CardContent, CardMedia, Typography } from '@material-ui/core'
import { MessageOutlined, ExploreOff } from '@material-ui/icons'
import DeletePoster from './DeletePoster'
import CommentsModal from './CommentsModal'

const PosterCard = ({
	title,
	_id,
	image,
	url,
	description,
	comments,
	path,
	content,
}) => {
	const [open, setOpen] = useState(false)
	const [coords, setCoords] = useState(null)
	useEffect(() => {
		console.log(path)
	}, [])

	return content ? (
		<StyledCard>
			<CardContent style={{ overflowY: 'scroll' }}>
				{comments && (
					<>
						<MessageOutlined
							style={{ cursor: 'pointer' }}
							onClick={e => {
								setOpen(!open)
								setCoords({ x: e.screenX, y: e.screenY })
							}}
						/>
						<CommentsModal
							coords={coords}
							setCoords={setCoords}
							open={open}
							setOpen={setOpen}
							comments={comments}
						/>
					</>
				)}
				<Typography gutterBottom variant="h5" component="p" />
				<a style={{ textDecoration: 'none', color: 'inherit' }} href={url}>
					{image ? (
						<CardMedia
							style={{ width: '200px', display: 'inherit' }}
							component="img"
							height="200px"
							image={image}
							alt="n/a"
						/>
					) : (
						<ExploreOff className="my-class" />
					)}
				</a>
				<p>{title}</p>
			</CardContent>
			<ButtonContainer>
				<DeletePoster path={path} id={_id} />
			</ButtonContainer>
		</StyledCard>
	) : (
		<StyledCard style={{ justifyContent: 'center' }}>
			<CardContent>
				<div>
					<h1>No posters yet...</h1>
				</div>
			</CardContent>
		</StyledCard>
	)
}
export default PosterCard
