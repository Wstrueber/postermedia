import styled from 'styled-components'
import Card from '@material-ui/core/Card'

export const CategoriesWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 80px;
`

export const StyledCard = styled(Card)`
	text-transform: uppercase;
	text-align: center;
	display: flex;
	word-wrap: break-word !important;
	flex-direction: column;
	width: 300px;
	height: 400px;
	background: whitesmoke !important;
	margin: 1%;
	&:hover {
		transform: scale(1.02);
		background: #e8e3e3 !important;
	}
`
