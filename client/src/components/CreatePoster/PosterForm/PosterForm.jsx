import React, { useState, useEffect } from 'react'
import { withPosters } from '../../../context/withPosters'

const PosterForm = ({
	children,
	toggleForm,
	handleClear,
	submitPoster,
	poster,
	path,
}) => {
	const [submit, triggerSubmit] = useState(false)

	useEffect(() => {
		if (submit) {
			submitPoster(poster, path)
			toggleForm()
			handleClear()
		}
	}, [submit])
	const handleForm = e => {
		e.preventDefault()
		triggerSubmit(!submit)
	}
	return <form onSubmit={e => handleForm(e)}>{children}</form>
}
export default withPosters(PosterForm)
