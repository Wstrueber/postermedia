import React from 'react'
import styled from 'styled-components'
import { ArrowBack } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media only screen and (max-width: 600px) {
		justify-content: flex-end;
	}
`

export const Container = styled.div`
	display: grid;
	width: 80vw;
	overflow-y: scroll;
	height: 84vh;
	grid-column-gap: 25px;
	grid-template-columns: 300px 300px 300px 300px;
	@media only screen and (max-width: 600px) {
		grid-template-columns: auto;
	}
`

export const Sidebar = styled.div`
	display: flex;
	position: sticky;
	align-items: center;
	justify-content: center;
	width: 10vw;
	&:hover {
		transform: scale(1.01);
	}
`
const SidebarWrapper = ({ style, children }) => {
	return <Sidebar style={style}>{children}</Sidebar>
}

const PostersWrapper = ({ children }) => {
	return (
		<Wrapper>
			<SidebarWrapper>
				<Link to="/">
					<IconButton>
						<ArrowBack fontSize="large" />
					</IconButton>
				</Link>
			</SidebarWrapper>
			<Container>{children}</Container>
		</Wrapper>
	)
}

export default PostersWrapper
