import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { StyledMenu } from './styled'
import { Link } from 'react-router-dom'

//cea7a7
const AppMenuBar = () => {
	const [anchorEl, setEvent] = useState(null)
	return (
		<div>
			<AppBar color="primary">
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
						<Link style={{ textDecoration: 'none' }} to="/">
							<MenuItem onClick={() => setEvent(null)}>Home</MenuItem>
						</Link>
						<Link style={{ textDecoration: 'none' }} to="/create">
							<MenuItem onClick={() => setEvent(null)}>Create Poster</MenuItem>
						</Link>
					</StyledMenu>
				</ToolBar>
			</AppBar>
		</div>
	)
}
export default AppMenuBar
