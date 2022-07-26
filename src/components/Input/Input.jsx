import React, { Component } from 'react';
import style from '../Form/form.module.css';
import InputMask from 'react-input-mask';

class Input extends Component {
	onChange = (event) => {
		this.props.handleInputChange(event);
	}

	onBlur = (event) => {
		this.props.handleBlur(event);
	}

	render() {
		const { type, text, name, data } = this.props;

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
							value={data.value}
							onChange={event => this.onChange(event)}
							onBlur={event => this.onBlur(event)}
							className={style.input}>
						</InputMask> :
						<input
							type={type}
							placeholder={text}
							name={name}
							value={data.value}
							onChange={event => this.onChange(event)}
							onBlur={type !== 'birthDate' ? event => this.onBlur(event) : undefined}
							className={style.input}
						/>
				}
				{data.hasError &&
					<div className={style.error}>{data.errorType}</div>
				}
			</label>
		);
	}
}

export default Input;