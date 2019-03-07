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
