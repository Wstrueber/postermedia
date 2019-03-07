import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Input from '@material-ui/core/Input'
import { theme } from '../theme'
import CircularProgress from '@material-ui/core/CircularProgress'

export const StyledCard = styled(Card)`
	text-align: center;
	display: flex;
	word-wrap: break-word !important;
	flex-direction: column;
	width: 300px;
	height: 400px;
	background: ${theme.cardBackground} !important;
	margin-bottom: 30px;
	&:hover {
		transform: scale(1.01);
	}
`
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
	flex-grow: 1;
	padding-bottom: 4%;
`
export const StyledButton = styled(Button)`
	align-self: flex-end;
`

export const StyledInput = styled(Input)`
	font-size: 1.15rem !important;
	font-weight: bolder;
	color: ${theme.primaryTextColor} !important;
`
export const Spinner = styled(CircularProgress)`
	color: ${theme.appBarBackground} !important;
`
