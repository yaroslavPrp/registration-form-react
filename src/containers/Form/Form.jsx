import React, { Component } from "react";
import style from "./form.module.css";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import INITIAL_FORM_STATE from "../../utils/initialFormState";

class Form extends Component {
  constructor() {
    super();
    this.state = INITIAL_FORM_STATE;
  }

  handleCancelClick = (event) => {
    event.preventDefault();
  };

  handleSaveClick = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = (event) => {
    const targetElem = event.target.name;
    const targetValue = event.target.value;

    this.setState({
      [targetElem]: targetValue,
    });
  };

  render() {
    return (
      <div className={style.container}>
        <form className={style.form}>
          <h2 className={style.title}>Создание анкеты</h2>

          <Input
            type="text"
            text="Имя"
            name="name"
            handleChange={this.handleChange}
          />

          <Input
            type="text"
            text="Фамилия"
            name="surname"
            handleChange={this.handleChange}
          />

          <Input
            type="date"
            text="Дата Рождения"
            name="birthDate"
            handleChange={this.handleChange}
          />

          <Input
            type="tel"
            text="Телефон"
            name="phone"
            handleChange={this.handleChange}
          />

          <Input
            type="text"
            text="Сайт"
            name="website"
            handleChange={this.handleChange}
          />

          <TextArea
            rows={7}
            text="О себе"
            name="about"
            handleChange={this.handleChange}
          />

          <TextArea
            rows={7}
            text="Стек технологий"
            name="technologies"
            handleChange={this.handleChange}
          />

          <TextArea
            rows={7}
            text="Описание последнего проекта"
            name="lastProject"
            handleChange={this.handleChange}
          />

          <div className={style.buttonContainer}>
            <button
              onClick={this.handleCancelClick}
              className={`${style.button} ${style.cancel}`}
            >
              Отмена
            </button>

            <button
              onClick={this.handleSaveClick}
              className={`${style.button} ${style.submit}`}
              type="submit"
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
