import React from "react";
import Input from "../common/input";
import Textarea from "../common/Textarea";
import Dropdown from "./dropdown";
import {
  handleChange,
  handleClick,
  validateForm,
  validateProperty,
  handleSubmit
} from "./formFunctions";

export const renderButton = (label, click) => {
  return (
    <button
      disabled={validateForm()}
      onClick={click}
      className="btn btn-primary"
    >
      {label}
    </button>
  );
};

export const renderDropDown = (name, label, options) => {
  // const { data, errors } = { ...this.state };

  return (
    <Dropdown
      name={name}
      label={label}
      options={options}
      value={""}
      // value={data[name]}
      onChange={e => handleChange(e)}
      error={""}
      // error={errors[name]}
    />
  );
};

export const renderInput = (name, label, type, min, max) => {
  return (
    <Input
      id={name}
      name={name}
      type={type}
      onChange={e => handleChange(e)}
      value={""}
      label={label}
      error={""}
      min={min}
      max={max}
    />
  );
};

export const renderTextarea = (name, label, rows, cols) => {
  // let { data, errors } = { ...this.state };

  return (
    <Textarea
      id={name}
      rows={rows}
      cols={cols}
      name={name}
      onChange={e => handleChange(e)}
      value={""}
      // value={data[name]}
      label={label}
      error={""}
      // error={errors[name]}
    />
  );
};

// const mapStateToProps = state => {
//   return state;
// };

// export default connect(
//   mapStateToProps,
//   { handleInputChange }
// );
