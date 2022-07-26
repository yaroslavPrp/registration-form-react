const INITIAL_FORM_STATE = {
	name: {
		value: '',
		hasError: false,
		errorType: ''
	},
	surname: {
		value: '',
		hasError: false,
		errorType: '',
	},
	birthDate: {
		value: '',
		hasError: false,
		errorType: '',
	},
	phone: {
		value: '',
		hasError: false,
		errorType: '',
	},
	website: {
		value: '',
		hasError: false,
		errorType: '',
	},
	about: {
		value: '',
		hasError: false,
		errorType: '',
		maxLength: 600,
	},
	technologies: {
		value: '',
		hasError: false,
		errorType: '',
		maxLength: 600,
	},
	lastProject: {
		value: '',
		hasError: false,
		errorType: '',
		maxLength: 600,
	}
}

export default INITIAL_FORM_STATE;