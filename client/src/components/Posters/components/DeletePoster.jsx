import React from 'react'
import { DeleteForeverRounded } from '@material-ui/icons/'
import { StyledButton } from './styled'
import { withPosters } from '../../../context/withPosters'

const DeletePoster = ({ handleDelete, id, path }) => {
	return (
		<>
			<StyledButton
				onClick={() => handleDelete(id, path)}
				variant="contained"
				color="secondary">
				DELETE
				<DeleteForeverRounded />
			</StyledButton>
		</>
	)
}
export default withPosters(DeletePoster)
