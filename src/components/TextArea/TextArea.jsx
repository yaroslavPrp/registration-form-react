import React, { Component } from 'react';
import style from '../../containers/Form/form.module.css';

class TextArea extends Component {
	render() {
		const { rows, text, name, handleChange } = this.props;

		return (
			<label className={style.element}>{text}
				<textarea
					onChange={event => handleChange(event)}
					rows={rows}
					placeholder={text}
					name={name}
					className={style.input}
				>
				</textarea>
			</label>
		);
	}
}

export default TextArea;