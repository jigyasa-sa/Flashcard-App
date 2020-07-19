import React from "react";
import "./App.css";
import Nbar from "./components/Navbar.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Flashcard from "./components/Flashcard.component";

class App extends React.Component {
  render() {
    return (
      <div className="container fluid">
        <Router>
          <Nbar />
          <Route path="/flashcards" component={Flashcard} />
        </Router>
      </div>
    );
  }
}

export default App;
