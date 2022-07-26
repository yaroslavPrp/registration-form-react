import React, { Component } from 'react';
import style from './form.module.css';
import Input from '../../components/Input/Input';
import TextArea from '../../components/TextArea/TextArea';
import INITIAL_FORM_STATE from '../../utils/initialFormState';

class Form extends Component {
	constructor(props) {
		super(props)
		this.state = INITIAL_FORM_STATE;
	}

	handleInputChange = (event) => {
		const targetInput = event.target.name;
		const targetValue = event.target.value;

		this.setState({
			[targetInput]: {
				...this.state[targetInput],
				value: targetValue
			}
		})
	}


	handleTextAreaChange = (event) => {
		const targetTextArea = event.target.name;
		const targetValue = event.target.value;

		if (targetValue.length > this.state[targetTextArea].maxLength) {
			this.setState({
				[targetTextArea]: {
					...this.state[targetTextArea],
					value: targetValue,
					hasError: true,
					errorType: 'Превышен лимит символов в поле'
				}
			})
		} else {
			this.setState({
				[targetTextArea]: {
					...this.state[targetTextArea],
					value: targetValue,
					hasError: false,
					errorType: ''
				}
			})
		}
	}

	handleNameBlur = (event) => {
		const targetInput = event.target.name;
		const targetValue = event.target.value;

		if (targetValue.length > 0 && targetValue.trim()[0].toUpperCase() !== targetValue.trim()[0]) {
			this.setState({
				[targetInput]: {
					...this.state[targetInput],
					hasError: true,
					errorType: 'Первый символ это всегда большая буква'
				}
			})
		} else {
			this.setState({
				[targetInput]: {
					...this.state[targetInput],
					hasError: false,
					errorType: ''
				}
			})
		}
	}

	handlePhoneBlur = (event) => {
		const targetInput = event.target.name;
		const targetValue = event.target.value;

		if (targetValue.length < 11 && targetValue !== '') {
			this.setState({
				[targetInput]: {
					...this.state[targetInput],
					hasError: true,
					errorType: 'Некорректный ввод номера телефона, необходимо минимум 8 символов'
				}
			})
		} else {
			this.setState({
				[targetInput]: {
					...this.state[targetInput],
					hasError: false,
					errorType: ''
				}
			})
		}
	}

	handleWebsiteBlur = (event) => {
		const targetInput = event.target.name;
		const targetValue = event.target.value;

		if (targetValue.length > 0 && !targetValue.startsWith('https://')) {
			this.setState({
				[targetInput]: {
					...this.state[targetInput],
					hasError: true,
					errorType: 'Сайт всегда должен начинаться с https://'
				}
			})
		} else {
			this.setState({
				[targetInput]: {
					...this.state[targetInput],
					hasError: false,
					errorType: ''
				}
			})
		}
	}

	handleCancelClick = (event) => {
		event.preventDefault();
		this.setState(INITIAL_FORM_STATE);
	}

	handleSaveClick = (event) => {
		event.preventDefault();
		const allFilled = Object.values(this.state).every(input => input.value.trim() !== '');
		const allReady = Object.values(this.state).every(input => input.hasError === false);

		if (!allFilled) {
			for (const input in this.state) {
				if (this.state[input].value.trim() === '') {
					this.setState({
						[input]: {
							...this.state[input],
							hasError: true,
							errorType: 'Поле пустое. Заполните пожалуйста'
						}
					})
				}
			}
		}

		if (allFilled && allReady) {
			this.props.readyForm(this.state);
		}
	}

	render() {
		const { name, surname, birthDate, phone, website, about, technologies, lastProject } = this.state;

		return (
			<div className={style.container}>
				<form className={style.form}>
					<h2 className={style.title}>Создание анкеты</h2>

					<Input
						type='text'
						text='Имя'
						name='name'
						data={name}
						handleInputChange={this.handleInputChange}
						handleBlur={this.handleNameBlur}
					/>

					<Input
						type='text'
						text='Фамилия'
						name='surname'
						data={surname}
						handleInputChange={this.handleInputChange}
						handleBlur={this.handleNameBlur}
					/>

					<Input
						type='date'
						text='Дата Рождения'
						name='birthDate'
						data={birthDate}
						handleInputChange={this.handleInputChange}
						handleBlur={this.handleNameBlur}
					/>

					<Input
						type='tel'
						text='Телефон'
						name='phone'
						data={phone}
						handleInputChange={this.handleInputChange}
						handleBlur={this.handlePhoneBlur}
					/>

					<Input
						type='text'
						text='Сайт'
						name='website'
						data={website}
						handleInputChange={this.handleInputChange}
						handleBlur={this.handleWebsiteBlur}
					/>

					<TextArea
						rows={7}
						text='О себе'
						name='about'
						data={about}
						handleTextAreaChange={this.handleTextAreaChange}
					/>

					<TextArea
						rows={7}
						text='Стек технологий'
						name='technologies'
						data={technologies}
						handleTextAreaChange={this.handleTextAreaChange}
					/>

					<TextArea
						rows={7}
						text='Описание последнего проекта'
						name='lastProject'
						data={lastProject}
						handleTextAreaChange={this.handleTextAreaChange}
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