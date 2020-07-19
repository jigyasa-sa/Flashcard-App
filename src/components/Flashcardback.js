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

class Flashcardback extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader></CardHeader>
        <CardBody>
          <CardText>{this.props.def}</CardText>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    );
  }
}

export default Flashcardback;
