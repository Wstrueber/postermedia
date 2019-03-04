import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { withPosters } from '../../../context/withPosters'

const PosterForm = ({ children, submitPoster, poster, choice }) => {
	const [submit, triggerSubmit] = useState(false)
	const [redirect, setRedirect] = useState(false)

	useEffect(() => {
		if (submit) {
			submitPoster(poster, choice)
			setRedirect(!redirect)
		}
	}, [submit])
	const handleForm = e => {
		e.preventDefault()
		triggerSubmit(!submit)
	}
	return (
		<>
			<form style={{ marginTop: '95px' }} onSubmit={e => handleForm(e)}>
				{children}
			</form>
			{redirect && <Redirect to={`${choice}`} />}
		</>
	)
}
export default withPosters(PosterForm)
