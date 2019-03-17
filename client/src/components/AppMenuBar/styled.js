import Menu from '@material-ui/core/Menu'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import { theme } from '../../theme'
export const StyledMenu = styled(Menu)`
	position: fixed;
`
export const StyledAppBar = styled(AppBar)`
	background-color: ${theme.appBarBackground} !important;
	color: ${theme.primaryTextColor} !important;
	font-weight: bolder;
`

export const ImageContainer = styled.div`
	height: 40px;
	border-radius: 40px;
	/* width: 130px; */
	background-color: whitesmoke;
	&:hover {
		background-color: darkgray;
	}
`
