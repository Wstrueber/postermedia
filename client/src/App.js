import React from 'react'
import Posters from './components/Posters'
import CreatePoster from './components/CreatePoster'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppMenuBar from './components/AppMenuBar'
import PosterProvider from './context/PosterProvider'
import Categories from './components/Categories'
import CategoryProvider from './context/CategoryProvider'

const App = () => {
	return (
		<CategoryProvider>
			<PosterProvider>
				<Router>
					<div>
						<AppMenuBar />
						<Route exact path="/" component={Categories} />
						<Route path="/news" component={Posters} />
						<Route path="/entertainment" component={Posters} />
						<Route path="/food" component={Posters} />
						<Route path="/interesting" component={Posters} />
						<Route path="/create" component={CreatePoster} />
					</div>
				</Router>
			</PosterProvider>
		</CategoryProvider>
	)
}
export default App
