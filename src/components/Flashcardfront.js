import React from "react";
import {
  Jumbotron,
  Card,
  CardBody,
  Button,
  CardText,
  Row,
  Col,
  CardHeader,
  CardFooter,
} from "reactstrap";

class Flashcardfront extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader></CardHeader>
        <CardBody>
          <CardText>{this.props.words}</CardText>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    );
  }
}

export default Flashcardfront;
