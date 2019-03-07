import React, { useState } from 'react'
import { StyledCard } from '../../common'
import CardContent from '@material-ui/core/CardContent'
import { Redirect } from 'react-router-dom'
import { withTheme } from 'styled-components'

const Category = props => {
	const [redirect, setRedirect] = useState(false)
	return (
		<StyledCard
			style={{ cursor: 'pointer' }}
			onClick={() => setRedirect(!redirect)}>
			<CardContent>
				<h2>{props.category}</h2>
				<img
					src={props.image}
					style={{ width: '200px', height: '200px' }}
					alt="n/a"
				/>
				{redirect && <Redirect to={`/${props.category}`} />}
			</CardContent>
		</StyledCard>
	)
}
export default withTheme(Category)
