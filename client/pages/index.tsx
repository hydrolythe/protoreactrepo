import React, { Component } from 'react'
import axios from 'axios'

interface Props { }
interface State {
	messages: object
}

export default class extends Component<Props, State> {
	constructor(props) {
		super(props)

		this.state = {
			messages: [],
		}

		// Gebruik axios.get('/api') om 'messages' op te halen
		// Sla de response van axios.get op in de state	

	}

	componentDidMount() {
		axios.get("/").then(function (result) {
			this.setState({ messages: result.data })
		})
	}

	public render() {
		return (
			<>
				<h1>App gestart</h1>
				{/* Toon de messages uit de state */}
				<ul>
					{this.state.messages}
				</ul>
				<style jsx>{`
					h1 {
						font-weight: bold;
					}
				`}</style>
			</>
		)
	}
}
