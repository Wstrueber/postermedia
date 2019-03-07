import React from 'react'
import { StyledAppBar } from './styled'
import { withTheme } from 'styled-components'
import { IconButton } from '@material-ui/core'
import { ToggleOn, ToggleOff } from '@material-ui/icons'

const AppMenuBar = ({ theme: { setTheme, mode } }) => {
	return (
		<StyledAppBar>
			<div
				style={{
					display: 'flex',
					position: 'sticky',
					top: 0,
					right: 0,
					width: '100%',
					flexDirection: 'column',
				}}>
				<div style={{ alignSelf: 'center' }}>
					<span>{(mode && mode.toUpperCase()) || 'LIGHT'}</span>
					<IconButton
						onClick={() =>
							setTheme(mode === 'dark' ? { mode: 'light' } : { mode: 'dark' })
						}>
						{mode === 'dark' ? (
							<ToggleOff fontSize="large" />
						) : (
							<ToggleOn fontSize="large" />
						)}
					</IconButton>
				</div>
			</div>
		</StyledAppBar>
	)
}

export default withTheme(AppMenuBar)

/*
	//cea7a7
	// import ToolBar from '@material-ui/core/Toolbar'
	// import Typography from '@material-ui/core/Typography'
	// import MenuIcon from '@material-ui/icons/Menu'
	// import MenuItem from '@material-ui/core/MenuItem'
	// import { StyledMenu } from './styled'
	// import { Link } from 'react-router-dom'
	// const [anchorEl, setEvent] = useState(null)
	/*
	<ToolBar>
	<IconButton
	onClick={e => {
		setEvent(e.currentTarget)
			}}
			aria-label="Menu">
			<MenuIcon fontSize="large" />
		</IconButton>
		<Typography variant="h6" color="inherit">
			MENU
			</Typography>
		<StyledMenu
			anchorEl={anchorEl}
			disableAutoFocusItem={true}
			id="menu-appbar"
			open={Boolean(anchorEl)}
			onClose={() => setEvent(null)}
			anchorOrigin={{
				horizontal: 'left',
				vertical: 'top',
			}}
			transformOrigin={{
				horizontal: 'left',
				vertical: 'top',
			}}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-evenly',
				}}>
				<Link style={{ textDecoration: 'none' }} to="/">
					<MenuItem onClick={() => setEvent(null)}>
						<Home />
						<span
							style={{
								fontSize: '1.2rem',
								fontWeight: 'bolder',
								marginLeft: '5px',
							}}>
							HOME
						</span>
					</MenuItem>
				</Link>
			</div>
		</StyledMenu>
	</ToolBar>
</AppBar> */
