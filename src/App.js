import React, { Component } from 'react';
import Form from './components/Form/Form';
import Profile from './components/Profile/Profile';


class App extends Component {
	state = {
		formReady: false,
		formData: {}
	}

	toggleReadiness = (data) => {
		this.setState({
			formReady: true,
			formData: data
		})
	}

	render() {
		return (
			<>
				{this.state.formReady ?
					<Profile data={this.state.formData} /> :
					<Form readyForm={this.toggleReadiness} />}
			</>
		)
	}
}

export default App;