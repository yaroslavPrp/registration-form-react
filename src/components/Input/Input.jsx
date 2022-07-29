import React, { Component } from 'react';
import style from '../../containers/Form/form.module.css';
import InputMask from 'react-input-mask';

class Input extends Component {
	onChange = (event) => {
		this.props.handleChange(event);
	}

	onBlur = (event) => {
		this.props.handleBlur(event);
	}

	render() {
		const { type, text, name, value, error, touched } = this.props;
		console.log(error)

		return (
			<label className={style.element}>{text}
				{
					name === 'phone' ?
						<InputMask
							mask="9-999-99-99"
							maskChar=""
							type={type}
							placeholder={text}
							name={name}
							value={value}
							onChange={event => this.onChange(event)}
							onBlur={event => this.onBlur(event)}
							className={style.input}>
						</InputMask> :
						<input
							type={type}
							placeholder={text}
							name={name}
							value={value}
							onChange={event => this.onChange(event)}
							onBlur={event => this.onBlur(event)}
							className={style.input}
						/>
				}
				{error && touched &&
					<div className={style.error}>{error}</div>
				}
			</label>
		);
	}
}

export default Input;