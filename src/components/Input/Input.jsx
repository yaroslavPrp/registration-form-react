import React, { Component } from "react";
import style from "../../containers/Form/form.module.css";

class Input extends Component {
  render() {
    const { type, text, name, handleChange } = this.props;

    return (
      <label className={style.element}>
        {text}
        <input
          onChange={(event) => handleChange(event)}
          type={type}
          placeholder={text}
          name={name}
          className={style.input}
        />
      </label>
    );
  }
}

export default Input;
