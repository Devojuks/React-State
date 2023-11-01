// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import "./App.css";
import image from "./cat.jpg";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "Samuel Ojukwu",
        bio: "A result oriented individual creating solutions to real life problems.",
        imgSrc: image,
        profession: "Full-stack Web Developer",
      },
      show: true,
      timeInterval: new Date(),
    };
  }

  componentDidMount() {
    // Capture the moment when the component was mounted
    this.setState({
      timeInterval: new Date(),
    });
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeInterval } = this.state;

    return (
      <div className="app">
        <h1>My Profile</h1>
        <button onClick={this.toggleProfile}>
          {show ? "Hide Profile" : "Seek Profile"}
        </button>

        {show && (
          <div className="card">
            <h2>{fullName}</h2>
            <p>Bio: {bio}</p>
            <p>Profession: {profession}</p>
            <img style={{ width: "25rem", height: "25rem", borderRadius: "200px" }} src={imgSrc} alt={fullName} />
          </div>
        )}

        <p>Time since mount: {timeInterval.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;