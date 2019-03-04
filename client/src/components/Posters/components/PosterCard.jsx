import React, { useState } from 'react'
import { StyledCard, ButtonContainer, StyledButton } from '../../../common'
import { CardContent, CardMedia, Tooltip } from '@material-ui/core'
import {
	MessageOutlined,
	ExploreOff,
	NotificationImportantOutlined,
} from '@material-ui/icons'
import DeletePoster from './DeletePoster'
import CommentsModal from './CommentsModal'

const PosterCard = ({
	title,
	_id,
	image,
	url,
	comments,
	path,
	content,
	description,
}) => {
	const [open, setOpen] = useState(false)
	const [coords, setCoords] = useState(null)
	console.log(description)
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
				<a style={{ textDecoration: 'none', color: 'inherit' }} href={url}>
					{image ? (
						<>
							<CardMedia
								style={{ width: '200px', display: 'inherit' }}
								component="img"
								height="200px"
								image={image}
								alt="n/a"
							/>
						</>
					) : (
						<ExploreOff className="my-class" />
					)}
				</a>
				<div>
					{description && (
						<Tooltip title={description}>
							<NotificationImportantOutlined />
						</Tooltip>
					)}
					<p>{title}</p>
				</div>
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
