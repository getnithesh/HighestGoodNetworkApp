import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import TimeEntry from './TimeEntry';
import store from '../../store';
import Form from '../common/form';
import Leaderboard from '../Leaderboard';

class TimelogPage extends Form {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  handleClick = () => {
    console.log(store.getState().userProfile.projects)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="text-center" onClick={this.handleClick}>Time Log</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={6} md={3}>
            <h2 className="float-left">
              {/* {store.getState().userProfile.firstName}
{' '}
{store.getState().userProfile.lastName} */}

            </h2>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <TimeEntry
              userData={this.state.data}
              projects={this.state.projects}
            />
          </Col>
          <Col lg={5}>
            <Leaderboard />
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  {
    return { state };
  }
};

export default connect(mapStateToProps)(TimelogPage);