import React from "react";
import {
  Jumbotron,
  Card,
  CardBody,
  CardText,
  Button,
  Row,
  Col,
  CardHeader,
  CardFooter,
} from "reactstrap";
import ReactCardFlip from "react-card-flip";
import Flashcardfront from "./Flashcardfront";
import Flashcardback from "./Flashcardback";
import { allWords } from "../data/data"; // allWords = [{word:abberant, def:"very good", set:1},...]

class Flashcard extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
      index: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.randomIndex = this.randomIndex.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      isFlipped: !prevState.isFlipped,
    }));
  }

  randomIndex() {
    var randomIndex = Math.random() * (999 - 0) + 0;
    this.setState((prevState) => ({
      isFlipped: false,
      index: Math.trunc(randomIndex),
    }));
  }

  render() {
    console.log(this.state.index);
    return (
      <div className="container">
        <Jumbotron>
          <Row>
            <Col>
              <br />
              <br />
              <Button className="m-1" onClick={this.handleClick}>
                Flip card
              </Button>
              <Button className="m-1" onClick={this.randomIndex}>
                Change Word
              </Button>
            </Col>
            <Col>
              <ReactCardFlip
                isFlipped={this.state.isFlipped}
                flipDirection="horizontal"
              >
                <Flashcardfront words={allWords[this.state.index].word} />
                <Flashcardback def={allWords[this.state.index].definition} />
              </ReactCardFlip>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}

export default Flashcard;
