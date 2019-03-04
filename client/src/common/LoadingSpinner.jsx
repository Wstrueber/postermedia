import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

function LoadingSpinner() {
	return (
		<div style={{ position: 'absolute', top: '50%', left: '50%' }}>
			<CircularProgress />
		</div>
	)
}
export default LoadingSpinner
