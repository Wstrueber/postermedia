import React, { Component, createContext } from 'react'
import axios from 'axios'
export const { Provider, Consumer } = createContext({})

export default class PosterProvider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			posters: [],
			getPosters: this.getPosters,
			handleDelete: this.handleDelete,
			submitPoster: this.submitPoster,
		}
	}
	getPosters = async category => {
		// console.log(category)
		const result = await axios.get(category)
		this.setState({ posters: result.data })
	}
	handleDelete = async (id, category) => {
		await axios.delete(`${category}/${id}`)
		this.getPosters(category)
	}
	submitPoster = async (data, category) => {
		console.log(category)
		console.log(data)
		await axios.post(category, data)
		this.getPosters(category)
	}
	render() {
		return <Provider value={this.state}>{this.props.children}</Provider>
	}
}
