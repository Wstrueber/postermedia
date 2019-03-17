import React from 'react'
import Posters from './components/Posters'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppMenuBar from './components/AppMenuBar'
import PosterProvider from './context/PosterProvider'
import Categories from './components/Categories'
import CategoryProvider from './context/CategoryProvider'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import useTheme from './theme/useTheme'
import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${theme.primary};
		color: ${theme.primaryTextColor};
		overflow: hidden;
		@media only screen and (max-width: 600px) {
		overflow: scroll;
	}
	}
`

const App = () => {
	const defaultTheme = useTheme()
	return (
		<ThemeProvider theme={defaultTheme}>
			<>
				<GlobalStyle />
				<CategoryProvider>
					<PosterProvider>
						<Router>
							<div>
								<AppMenuBar />
								<Route exact path="/" component={Categories} />
								<Route path="/news" component={Posters} />
								<Route path="/entertainment" component={Posters} />
								<Route path="/food" component={Posters} />
								<Route path="/other" component={Posters} />
							</div>
						</Router>
					</PosterProvider>
				</CategoryProvider>
			</>
		</ThemeProvider>
	)
}
export default App
