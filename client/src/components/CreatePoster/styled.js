import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Input from '@material-ui/core/Input'

export const PosterWrapper = styled.div`
	display: flex;
	justify-content: center;
`
export const PosterContainer = styled(Card)`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	padding: 1%;
`
export const ButtonContainer = styled.div`
	margin-top: 4%;
	display: flex;
	justify-content: center;
	flex-grow: 1;
`
export const StyledButton = styled(Button)`
	align-self: flex-end;
`
export const StyledInput = styled(Input)`
	font-size: 2rem !important;
`
