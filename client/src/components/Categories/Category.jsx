import React, { useState, useEffect } from 'react'
import { StyledCard } from '../../common'
import CardContent from '@material-ui/core/CardContent'
import { Redirect } from 'react-router-dom'
import { withTheme } from 'styled-components'
import { CardMedia } from '@material-ui/core'
import entertainment from './logos/entertainment.png'
import news from './logos/news.png'
import food from './logos/food.png'
import other from './logos/other.png'

const Category = props => {
	const [redirect, setRedirect] = useState(false)
	const [logo, setLogo] = useState('')

	useEffect(() => {
		switch (props.category) {
			case 'news':
				setLogo(news)
				break
			case 'food':
				setLogo(food)
				break
			case 'other':
				setLogo(other)
				break
			case 'entertainment':
				setLogo(entertainment)
				break
			default:
				return null
		}
	}, [props.category])

	return (
		<StyledCard
			style={{ cursor: 'pointer' }}
			onClick={() => setRedirect(!redirect)}>
			<CardContent>
				<h2>{props.category.toUpperCase()}</h2>
				{logo && (
					<CardMedia
						component="img"
						src={logo}
						alt="n/a"
						style={{ marginTop: '50px' }}
					/>
				)}
				{redirect && <Redirect to={`/${props.category}`} />}
			</CardContent>
		</StyledCard>
	)
}
export default withTheme(Category)
