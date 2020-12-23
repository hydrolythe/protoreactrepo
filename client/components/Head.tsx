import { Component } from 'react'
import { Head } from 'next/document'

interface Props {}

export default class extends Component<Props> {
	render() {
		return (
			<>
				<Head>
					<title>Opgave</title>
					<link rel="shortcut icon" href="/static/favicon.png" />

					<link
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						rel="stylesheet"
					/>

					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
				</Head>
			</>
		)
	}
}
