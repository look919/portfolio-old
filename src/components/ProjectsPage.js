import React from "react";

import Header from "./Header";
import Info from "./Info";
import Nav from "./Nav";

import { ArrowRight, ArrowLeft } from "../Icons/Icons";

import chickyChicken from "../img/chickychicken.png";
import byt from "../img/byt.png";
import portfolio from "../img/portfolio.png";
import pt from "../img/pt.png";
import chessGame from "../img/chess.png";
import tgio from "../img/tgio.png";
import hotelGiant from "../img/hotelGiant.png";

import reactRedux from "../img/reactredux.png";
import react from "../img/react.png";
import nodejs from "../img/node.png";
import mongodb from "../img/mongodb.png";
import firebase from "../img/firebase.png";
import javascript from "../img/js.png";
import css from "../img/css.png";
import cpp from "../img/cpp.png";
import qt from "../img/qt.png";

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      project: [
        {
          title: "Hotel Giant",
          github: "https://github.com/look919/chickyChicken",
          url: "https://chickychicken.herokuapp.com",
          img: hotelGiant,
          imgHover: [nodejs, mongodb, reactRedux, css]
        },
        {
          title: "ChickyChicken",
          github: "https://github.com/look919/chickyChicken",
          url: "https://chickychicken.herokuapp.com",
          img: chickyChicken,
          imgHover: [nodejs, firebase, reactRedux, css]
        },
        {
          title: "BookYourTime",
          github: "https://github.com/look919/Book-Your-Time",
          url: "https://bookyourtime.herokuapp.com/",
          img: byt,
          imgHover: [nodejs, firebase, react, css]
        },
        {
          title: "Portfolio",
          github: "https://github.com/look919/portfolio",
          url: "https://tomasz-wirkus-portfolio.herokuapp.com/",
          img: portfolio,
          imgHover: [react, css]
        },
        {
          title: "ProgressTracker",
          github: "https://github.com/look919/Progress-Tracker",
          url: "http://progresstracker.surge.sh/index.html#",
          img: pt,
          imgHover: [javascript, css]
        },
        {
          title: "C++ Chess game",
          github: "https://github.com/look919/Chess-game-Qt",
          url: "https://www.youtube.com/watch?v=oQRxG5nHmoY",
          img: chessGame,
          imgHover: [cpp, qt]
        },
        {
          title: "C++ ThreeGamesInOne",
          github: "https://github.com/look919/Three-games-in-one-Qt",
          url: "https://www.youtube.com/watch?v=SC5MxK_dTsI",
          img: tgio,
          imgHover: [cpp, qt]
        }
      ],
      paragraph: [
        "I decided not to include projects from online courses in the portfolio, despite the fact that their creation was very important in my development, I wrote all the projects in the portfolio 100% by myself.",
        "The most important projects of mine for now are ChickyChicken and HotelGiant, the first is an application for restaurant, the second is for a hotel. Both are made with an idea to get overview of a services that those comapnies can sell. Besides that in both apps potential customers can make an order online or contact with company. Projects that I created bases on frontend but i plan to rebuild them with Node.js to add things like api, user authentication and online payments."
      ]
    };
  }
  addIndex = () => {
    const maxIndex = this.state.project.length;
    let newValueOfIndex = this.state.index + 1;

    if (newValueOfIndex === maxIndex) newValueOfIndex = 0;
    this.setState(() => ({ index: newValueOfIndex }));
  };
  subtractIndex = () => {
    const lastProjectIndex = this.state.project.length - 1;
    const minIndex = 0;
    let newValueOfIndex = this.state.index - 1;

    if (newValueOfIndex < minIndex) newValueOfIndex = lastProjectIndex;
    this.setState(() => ({ index: newValueOfIndex }));
  };

  render() {
    let index = this.state.index;
    let project = this.state.project[index];
    return (
      <div className="container">
        <Header title="Projects" />
        <Info title="My works" paragraph={this.state.paragraph} modalSvg={2} />
        <div className="content content--projectPage">
          <button onClick={this.subtractIndex} className="project__btn">
            <ArrowLeft />
          </button>
          <figure className="project">
            <div className="project__info">
              <h2 className="project__title">{project.title}</h2>
              <a
                href={project.github}
                className="project__link"
                target="_blanc"
              >
                Github
              </a>
              <a href={project.url} className="project__link" target="_blanc">
                Online
              </a>
            </div>

            <div className="project__techs">
              <img className="project__img" src={project.img} />

              <div className="project__technologies">
                {project.imgHover.map(el => {
                  return (
                    <img
                      src={el}
                      className="project__technologies__imgHover"
                      key={el}
                    />
                  );
                })}
              </div>
            </div>
          </figure>
          <button onClick={this.addIndex} className="project__btn">
            <ArrowRight />
          </button>
        </div>
        <Nav />
      </div>
    );
  }
}

export default ProjectsPage;
