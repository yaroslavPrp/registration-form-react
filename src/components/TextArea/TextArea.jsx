import React, { Component } from 'react';
import style from '../../containers/Form/form.module.css';

class TextArea extends Component {
	onChange = (event) => {
		this.props.handleTextAreaChange(event);
	}

	onBlur = (event) => {
		this.props.handleErrorBlur(event);
	}

	render() {
		const { rows, text, name, data } = this.props;

		return (
			<label className={style.element}>{text}
				<textarea
					value={data.value}
					onChange={event => this.onChange(event)}
					className={style.input}
					rows={rows}
					placeholder={text}
					name={name}>
				</textarea>
				{data.hasError ?
					<div className={style.error}>{data.errorType}</div> :
					<div className={style.textAreaCounter}>{data.value.length}/{data.maxLength}</div>
				}
			</label>
		);
	}
}

export default TextArea;