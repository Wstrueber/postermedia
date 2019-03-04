import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'

export const StyledCard = styled(Card)`
	text-align: center;
	display: flex;
	word-wrap: break-word !important;
	flex-direction: column;
	width: 300px;
	height: 400px;
	background: whitesmoke !important;
	margin: 1%;
`
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-grow: 1;
	padding-bottom: 4%;
`
export const StyledButton = styled(Button)`
	align-self: flex-end;
`
