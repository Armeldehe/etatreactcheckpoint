import "./App.css";
import { Container } from "react-bootstrap";
import React from "react";
import { Card, Button } from "react-bootstrap";


class MountTimer extends React.Component {
  state = { seconds: 0 };

  componentDidMount() {
    this._start = Date.now();
    this._interval = setInterval(() => {
      const seconds = Math.floor((Date.now() - this._start) / 1000);
      this.setState({ seconds });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    return (
      <div className="mount-timer" aria-live="polite">
        Monté depuis : <strong>{this.state.seconds}s</strong>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    person: {
      fullName: "Armel Dehe",
      bio: "A software developer with a passion for open source.",
      imgSrc: './Armel.png',
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
            <Card style={{ width: "18rem" }} className="Spp">
            <Card.Img className="armel-photo" variant="top" src={this.state.person.imgSrc} />
          <Card.Body>
            <Card.Title> {this.state.person.fullName} </Card.Title>
            <Card.Text>
              <h2> {this.state.person.profession} </h2>
              <h3> {this.state.person.bio} </h3>
            </Card.Text>
            <Button variant="primary">Voir plus</Button>
            <MountTimer />
          </Card.Body>
        </Card>
          )
        }
        

      </Container>
    );
  }
}

export default App;
