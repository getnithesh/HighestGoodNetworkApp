import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import ModalA from "../common/modal";
import ModalBody from "./TimeEntryModalBody";
import Tabs from "../common/Tabs";

class TimeEntry extends Component {
  render() {
    return (
      <Container>
        <Card>
          <CardBody>
            <Row>
              <Col>
                <h1>Time Entry</h1>
              </Col>
              <Col>
                <ModalA
                  header="Add Time Entry"
                  buttonLabel="Add Time Entry"
                  color="primary"
                  body={<ModalBody /* userData={} projects={} */ />}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Tabs />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    );
  }
}
export default TimeEntry;
