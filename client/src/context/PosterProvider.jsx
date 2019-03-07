import React, { Component, createContext } from 'react'
import axios from 'axios'
export const { Provider, Consumer } = createContext({})

export default class PosterProvider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			posters: [],
			loading: false,
			showSpinner: this.showSpinner,
			getPosters: this.getPosters,
			handleDelete: this.handleDelete,
			submitPoster: this.submitPoster,
		}
	}
	showSpinner = () => {
		this.setState({ spinner: true })
	}
	getPosters = async category => {
		this.showSpinner()
		const result = await axios.get(`api/${category}`)
		this.setState({ posters: result.data, spinner: false })
	}
	handleDelete = async (id, category) => {
		await axios.delete(`api/${category}/${id}`)
		this.getPosters(category)
	}
	submitPoster = async (data, category) => {
		this.showSpinner()
		await axios.post(`api/${category}`, data)
		this.getPosters(category)
	}
	render() {
		return <Provider value={this.state}>{this.props.children}</Provider>
	}
}
