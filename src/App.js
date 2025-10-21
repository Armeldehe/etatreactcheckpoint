import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import React from "react";
import { Card, Button } from "react-bootstrap";


class App extends React.Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "A software developer with a passion for open source.",
      imgSrc: logo,
      profession: "Software Engineer",
    },
    show: false,
  };
  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <Container className="Container w-300 h-300 d-flex flex-column align-items-center justify-content-center mt-5 p-5 border border-3 rounded-3">
        
        <button variant="info" onClick={this.toggleShow} className="mb-3">Show</button>
        {
          this.state.show && (
            <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.state.person.imgSrc} />
          <Card.Body>
            <Card.Title> {this.state.person.fullName} </Card.Title>
            <Card.Text>
              <h2> {this.state.person.profession} </h2>
              <h3> {this.state.person.bio} </h3>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
          )
        }
        

      </Container>
    );
  }
}

export default App;
