import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'

const styles = theme => ({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		maxHeight: 59,
		overflowY: 'scroll',
		position: 'absolute',
		wordWrap: 'break-word',
		width: theme.spacing.unit * 20,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
		outline: 'none',
	},
})

const CommentsModal = ({
	classes,
	open,
	setOpen,
	comments,
	coords,
	setCoords,
}) => {
	const handleClose = e => {
		setOpen(!open)
		if (e) {
			setCoords({ x: e.screenX, y: e.screenY })
		}
	}
	const getModalStyle = () => {
		return {
			top: `${coords.y - 50}px`,
			left: `${coords.x}px`,
			transform: `translate(-50%, -50%)`,
		}
	}
	return (
		<div>
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={open || false}
				onClose={e => handleClose(e)}>
				<div style={coords && getModalStyle()} className={classes.paper}>
					<Typography variant="h5" id="modal-title">
						Comments:
					</Typography>
					<Typography variant="subtitle1" id="simple-modal-description">
						{comments}
					</Typography>
					<WrappedCommentsModal />
				</div>
			</Modal>
		</div>
	)
}

const WrappedCommentsModal = withStyles(styles)(CommentsModal)

export default WrappedCommentsModal
