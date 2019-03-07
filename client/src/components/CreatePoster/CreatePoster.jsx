import React, { useState, useEffect } from 'react'
import PosterForm from './PosterForm'
import { CardContent } from '@material-ui/core'
import {
	StyledCard,
	ButtonContainer,
	StyledButton,
	StyledInput,
} from '../../common'

import Add from '@material-ui/icons/Add'

const CreatePoster = ({ path }) => {
	const [url, setUrl] = useState('')
	const [comments, setComments] = useState('')
	const [poster, setPoster] = useState('')
	const [open, setOpen] = useState(false)

	useEffect(() => {
		setPoster({ url, comments })
	}, [url, comments])

	const handleUrlChange = e => {
		setUrl(e.target.value)
	}
	const handleCommentsChange = e => {
		setComments(e.target.value)
	}

	const toggleForm = () => {
		setOpen(!open)
	}
	const handleClear = () => {
		setUrl('')
		setComments('')
	}

	return open ? (
		<StyledCard>
			<PosterForm
				handleClear={handleClear}
				toggleForm={toggleForm}
				path={path}
				poster={poster}>
				<CardContent>
					<div
						style={{
							display: 'flex',
							height: '380px',
							justifyContent: 'center',
							flexDirection: 'column',
						}}>
						<StyledInput
							required={true}
							type="url"
							placeholder="https://example.com"
							value={url}
							onChange={handleUrlChange}
						/>

						<StyledInput
							required={true}
							type="text"
							placeholder="comments..."
							value={comments}
							onChange={handleCommentsChange}
						/>
						<ButtonContainer>
							<StyledButton
								onClick={() => {
									toggleForm()
									handleClear()
								}}
								variant="contained"
								color="secondary"
								type="submit">
								Cancel
							</StyledButton>
							<StyledButton variant="contained" color="primary" type="submit">
								Create Poster
							</StyledButton>
						</ButtonContainer>
					</div>
				</CardContent>
			</PosterForm>
		</StyledCard>
	) : (
		<StyledCard>
			<CardContent>
				<h1>Create Poster</h1>
				<div
					style={{
						display: 'flex',
						height: '400px',
						justifyContent: 'center',
					}}>
					<Add
						className="my-class"
						style={{ cursor: 'pointer' }}
						onClick={toggleForm}
					/>
				</div>
			</CardContent>
		</StyledCard>
	)
}
export default CreatePoster
