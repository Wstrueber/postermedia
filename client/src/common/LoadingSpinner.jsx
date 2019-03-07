import React from 'react'
// import CircularProgress from '@material-ui/core/CircularProgress'
import { Spinner } from './styled'
function LoadingSpinner() {
	return (
		<div style={{ position: 'absolute', top: '50%', left: '50%' }}>
			<Spinner />
		</div>
	)
}
export default LoadingSpinner
