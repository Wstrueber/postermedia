import styled from 'styled-components'

export const CategoriesWrapper = styled.div`
	display: grid;
	overflow-y: scroll;
	grid-column-gap: 25px;
	justify-content: center;
	grid-template-columns: auto auto auto auto;
	@media only screen and (max-width: 600px) {
		grid-template-columns: auto;
	}
`
