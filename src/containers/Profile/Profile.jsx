import React, { Component } from 'react';
import style from './profile.module.css';

class Profile extends Component {
	render() {
		const { name, surname, birthDate, phone, website, about, technologies, lastProject } = this.props.data;

		return (
			<div className={style.container}>
				<div className={style.profile}>
					<div className={style.title}>
						{name.value} {surname.value}
					</div>
					<p className={style.element}>
						<span className={style.element__description}>Дата рождения:</span>
						<span className={style.element__data}>{birthDate.value}</span>
					</p>
					<p className={style.element}>
						<span className={style.element__description}>Номер телефона:</span>
						<span className={style.element__data}>{phone.value}</span>
					</p>
					<p className={style.element}>
						<span className={style.element__description}>Мой сайт:</span>
						<span className={style.element__data}>{website.value}</span>
					</p>
					<div className={style.text}>
						<div className={style.text__description}>О себе:</div>
						<div className={style.text__data}>{about.value}</div>
					</div>
					<div className={style.text}>
						<div className={style.text__description}>Стек технологий:</div>
						<div className={style.text__data}>{technologies.value}</div>
					</div>
					<div className={style.text}>
						<div className={style.text__description}>Описание последнего проекта:</div>
						<div className={style.text__data}>{lastProject.value}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Profile