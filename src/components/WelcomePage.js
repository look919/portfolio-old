import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import { Link } from "react-router-dom";

import myPhoto from "../img/me.png";
import Polish from "../img/polflag.png";
import English from "../img/uk.png";
import Italian from "../img/italy.png";
import {
  LinkedInIcon,
  GithubIcon,
  HackerrankIcon,
  GmailIcon
} from "../Icons/Icons";

const WelcomePage = () => {
  return (
    <div className="container container--animated">
      <Header title="Tomasz Wirkus" />
      <div className="content content--welcomePage">
        <p className="main-page__text">
          Hello! My name is Tomasz and I would like to welcome you on my
          website, feel free to look around.
        </p>
        <div className="about-me">
          <ul className="about-me__list">
            <li className="about-me__item">
              Name: <span className="about-me__item--answer">Tomasz</span>
            </li>
            <li className="about-me__item">
              Surname: <span className="about-me__item--answer">Wirkus</span>
            </li>
            <li className="about-me__item">
              Age: <span className="about-me__item--answer">21</span>
            </li>
            <li className="about-me__item">
              Status:{" "}
              <span className="about-me__item--answer">
                Student of computer sience
              </span>
            </li>
            <li className="about-me__item">
              Goal:
              <span className="about-me__item--answer">
                Fullstack Developer
              </span>
            </li>
            <li className="about-me__item">
              Languages:
              <span className="about-me__item--answer about-me__item--answer--languages">
                <img src={Polish} className="about-me__item--flag" /> -
                Native,&nbsp;
                <img src={English} className="about-me__item--flag" /> -
                B2,&nbsp;
                <img src={Italian} className="about-me__item--flag" /> - A1
              </span>
            </li>
            <li className="about-me__item">
              Email:
              <span className="about-me__item--answer">
                wirkus919@gmail.com
              </span>
            </li>
          </ul>
          <div className="my-photo about-me__photo">
            <img src={myPhoto} className="my-photo__img-radius" />
            <div className="my-photo__icons">
              <a href="https://github.com/look919" target="_blanc">
                <LinkedInIcon />
              </a>
              <a href="https://github.com/look919" target="_blanc">
                <GithubIcon />
              </a>
              <a
                href="https://www.hackerrank.com/wirkustomasz919"
                target="_blanc"
              >
                <HackerrankIcon />
              </a>
              <Link to="/contact">
                <GmailIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default WelcomePage;
