import React, { Component } from 'react';
import style from '../../containers/Form/form.module.css';

class Input extends Component {

	render() {
		const { type, text, name, reference} = this.props;

		return (
			<label className={style.element}>{text}
				<input
					type={type}
					placeholder={text}
					name={name}
					className={style.input}
					ref={reference}
				/>
			</label>
		);
	}
}

export default Input;