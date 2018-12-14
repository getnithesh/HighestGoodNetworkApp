import Joi from "joi";
import _ from "lodash";
import { connect } from "react-redux";
import { handleInputChange } from "../../actions";

export const handleChange = event => {
  console.log(this.props);
};

// export const handleChange = ({ currentTarget: input }) => {
//   let { data, errors } = { ...this.state };
//   data[input.name] = input.value;

//   const errorMessage = this.validateProperty(input.name, input.value);

//   if (errorMessage) {
//     errors[input.name] = errorMessage;
//   } else {
//     delete errors[input.name];
//   }
//   this.setState({ data, errors });
//   console.log(this.state);
// };

export const handleClick = () => {
  this.setState({
    data: {
      tangible: !this.state.data.tangible
    }
  });
};

export const validateProperty = (name, value) => {
  const obj = { [name]: value };
  const schema = { [name]: this.schema[name] };
  const { error } = Joi.validate(obj, schema);
  if (!error) return null;
  return error.details[0].message;
};

export const validateForm = data => {
  //   let errors = {};
  //   const options = { abortEarly: false };
  //   const { error } = Joi.validate(this.state.data, this.schema, options);
  //   if (!error) return null;
  //   error.details.forEach(element => {
  //     errors[element.path[0]] = element.message;
  //   });
  //   const messages = _.groupBy(error.details, "path[0]");
  //   Object.keys(messages).forEach(key => {
  //     errors[key] = messages[key].map(item => item.message).join(". ");
  //   });
  //   return errors;
};

export const handleSubmit = e => {
  e.preventDefault();
  const errors = this.validateForm();
  this.setState({ errors: errors || {} });
  if (errors) return;
  this.doSubmit();
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { handleInputChange }
)(handleChange);
