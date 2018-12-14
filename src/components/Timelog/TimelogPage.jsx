import React, { Component } from "react";
import TimeEntry from "./TimeEntry";
import { connect } from "react-redux";
import Leaderboard from "../Leaderboard";
import { getCurrentUser } from "../../actions";
import { getjwt } from "../../services/loginService";
import { Container, Row, Col } from "reactstrap";

class TimelogPage extends Component {
  componentDidMount() {
    this.props.getCurrentUser(getjwt());
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">Time Log</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={6} md={3}>
            <h2 className="float-left" onClick={this.handleClick}>
              {"a"}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <TimeEntry
              userData={/* hardcode */ "hi"}
              projects={/* hardcore */ ["a", "b"]}
            />
          </Col>
          <Col lg={4}>
            <Leaderboard />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(
  mapStateToProps,
  { getCurrentUser }
)(TimelogPage);
