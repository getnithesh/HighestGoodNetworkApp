import React, { Component } from "react";
import { FormGroup, Container, Row, Col, Button } from "reactstrap";
import Joi from "joi";
import {
  renderInput,
  renderDropDown,
  renderTextarea,
  renderButton
} from "../common/form";
import moment from "moment";
import { connect } from "react-redux";
import { postTimeEntry } from "../../actions";

class TimeEntryBody extends Component {
  constructor(props, context) {
    super(props, context);
  }

  schema = {
    date: Joi.string()
      .required()
      .label("Date")
      .options({
        language: {
          string: {
            regex: {
              base: "Please select a date"
            }
          }
        }
      }),

    minutes: Joi.number()
      .min(0)
      .max(59)
      .label("minutes")
      .options({
        language: {
          string: {
            regex: {
              base: "0 through 59"
            }
          }
        }
      }),

    hours: Joi.number()
      .min(0)
      .max(23)
      .label("hours")
      .options({
        language: {
          string: {
            regex: {
              base: "0 through 23"
            }
          }
        }
      }),

    tangible: Joi.label("Tangible"),

    projectId: Joi.string().required(),

    notes: Joi.string().label("notes")
  };

  handleSubmit = () => {
    let timeEntry = {};
    // timeEntry.timeSpent = `${this.state.data.hours}:${this.state.data.minutes}`;
    timeEntry.timeSpent = `01:00:10`;
    timeEntry.personId = this.props.userData.userid;
    timeEntry.projectId = this.state.data.projectId;
    timeEntry.dateofWork = this.state.data.date;
    timeEntry.isTangible = "false";
    timeEntry.notes = this.state.data.notes;
    console.log(timeEntry);
    postTimeEntry(timeEntry);
  };

  componentWillMount() {
    console.log("context!!!!!!!!!!!!!!!", this.props);
  }

  render() {
    const max = moment().format("YYYY-MM-DD");
    const min = moment()
      .day(1)
      .format("YYYY-MM-DD");

    return (
      <div>
        <Container>
          <Row>
            <Col lg={12}>
              <FormGroup>
                {renderInput("date", "Date", "date", min, max)}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <FormGroup>
                {renderInput("hours", "Hours", "number", 0, 23)}
              </FormGroup>
            </Col>
            <Col lg={6}>
              <FormGroup>
                {renderInput("minutes", "Minutes", "number", 0, 59)}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <FormGroup>
                {renderDropDown("projectId", "Projects", ["a", "b"])}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <FormGroup>{renderTextarea("notes", "Notes", 3, 4)}</FormGroup>
            </Col>
          </Row>
          <Row>
            <FormGroup>
              {renderInput("tangible", "Tangible", "checkbox")}
            </FormGroup>
          </Row>
          <Row>
            <Col>
              <Button color="danger" onClick={this.clearForm}>
                Clear Form
              </Button>
            </Col>
            <Col>{renderButton("Submit", this.handleSubmit)}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(TimeEntryBody);
