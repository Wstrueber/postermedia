import React, { Component, createContext } from 'react'
import axios from 'axios'

export const { Provider, Consumer } = createContext({})

export default class CategoryProvider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: [],
			getCategories: this.getCategories,
		}
	}
	getCategories = async () => {
		const result = await axios.get('categories')
		// console.log(result.data)
		this.setState({ categories: result.data })
	}

	render() {
		return <Provider value={this.state}>{this.props.children}</Provider>
	}
}
