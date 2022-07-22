import React, { Component } from 'react';
import style from '../../containers/Form/form.module.css';

class TextArea extends Component {

	render() {
		const { rows, text, name, reference } = this.props;

		return (
			<label className={style.element}>{text}
				<textarea
					rows={rows}
					placeholder={text}
					name={name}
					className={style.input}
					ref={reference}
				>
				</textarea>
			</label>
		);
	}
}

export default TextArea;