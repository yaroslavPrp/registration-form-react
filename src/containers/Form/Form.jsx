import React, { Component } from 'react';
import style from './form.module.css';
import Input from '../../components/Input/Input';
import TextArea from '../../components/TextArea/TextArea';

class Form extends Component {
	constructor() {
		super();
		this.nameInput = React.createRef();
		this.surnameInput = React.createRef();
		this.birthDateInput = React.createRef();
		this.phoneInput = React.createRef();
		this.websiteInput = React.createRef();
		this.aboutTextArea = React.createRef();
		this.technologiesTextArea = React.createRef();
		this.lastProjectTextArea = React.createRef();
	}

	handleCancelClick = (event) => {
		event.preventDefault();
	}

	handleSaveClick = (event) => {
		event.preventDefault();
		
		console.log({
			name: this.nameInput.current.value,
			surname: this.surnameInput.current.value,
			birthDate: this.birthDateInput.current.value,
			phone: this.phoneInput.current.value,
			website: this.websiteInput.current.value,
			about: this.aboutTextArea.current.value,
			technologies: this.technologiesTextArea.current.value,
			lastProject: this.lastProjectTextArea.current.value,
		})
	}

	render() {
		return (
			<div className={style.container}>
				<form className={style.form}>
					<h2 className={style.title}>Создание анкеты</h2>

					<Input
						type='text'
						text='Имя'
						name='name'
						reference={this.nameInput}
					/>

					<Input
						type='text'
						text='Фамилия'
						name='surname'
						reference={this.surnameInput}
					/>

					<Input
						type='date'
						text='Дата Рождения'
						name='birthDate'
						reference={this.birthDateInput}
					/>

					<Input
						type='tel'
						text='Телефон'
						name='phone'
						reference={this.phoneInput}
					/>

					<Input
						type='text'
						text='Сайт'
						name='website'
						reference={this.websiteInput}
					/>

					<TextArea
						rows={7}
						text='О себе'
						name='about'
						reference={this.aboutTextArea}
					/>

					<TextArea
						rows={7}
						text='Стек технологий'
						name='technologies'
						reference={this.technologiesTextArea}
					/>

					<TextArea
						rows={7}
						text='Описание последнего проекта'
						name='lastProject'
						reference={this.lastProjectTextArea}
					/>

					<div className={style.buttonContainer}>
						<button
							onClick={this.handleCancelClick}
							className={`${style.button} ${style.cancel}`}>
							Отмена
						</button>

						<button
							onClick={this.handleSaveClick}
							className={`${style.button} ${style.submit}`}
							type='submit'>
							Сохранить
						</button>
					</div>

				</form>
			</div>
		);
	}
}

export default Form;