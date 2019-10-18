import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'

import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/js.png'
import react from '../img/react.png'
import git from '../img/git.png'

import {HtmlIcon, CssIcon, JsIcon, ReactIcon, GitIcon} from '../Icons/Icons'

const WelcomePage = () => {
    
    return(
        <div className="content">

            <h1 className="header__heading-primary">Skills</h1>
            <div className="card__flex">
            <div className="card">  
                    <div className="card__side card__side--front background-html">
                        <div className="card__side--front-header">HTML</div>               
                        <div>
                            <img src={html} alt="HTML Logo"  width="90" height="90" className="card__side--front-image"/>
                        </div> 
                    </div>
                    <div className="card__side card__side--back background-html">
                        <ul className="card__side--back__list">
                            <li>Clean and understandable code</li>
                            <li>BEM methodology</li>
                            <li>Responsive design</li>
                        </ul>
                        <div>
                            <img src={html} alt="HTML Logo"  width="90" height="90" className="card__side--front-image"/>
                        </div> 
                    </div>
            </div>

            <div className="card">
                <div className="card__side card__side--front background-css">
                    <div className="card__side--front-header">CSS & Sass</div>               
                    <div>
                        <img src={css} alt="CSS Logo"  width="90" height="90" className="card__side--front-image"/>
                    </div>   
                </div>
                <div className="card__side card__side--back background-css">
                    <ul className="card__side--back__list">
                        <li>Float, flexbox and grid design</li>
                        <li>Sass preprocessor, clean and nested code</li>
                        <li>Animations, responsive design</li>
                        <li>Course by Jonas Schmedtmann on Udemy: <a className="card__side--back__link" href="https://www.udemy.com/course/advanced-css-and-sass/">Link</a></li>
                    </ul>
                    <div>
                        <img src={css} alt="CSS Logo"  width="90" height="90" className="card__side--front-image"/>         
                    </div> 
                </div>
            </div>

            <div className="card">
                <div className="card__side card__side--front background-js">
                    <div className="card__side--front-header">Javascript</div>               
                    <div>
                        <img src={js} alt="JS Logo"  width="90" height="90" className="card__side--front-image"/>
                    </div>   
                </div>
                <div className="card__side card__side--back background-js">
                    
                    <ul className="card__side--back__list">
                        <li>ES6/ES7</li>
                        <li>OOP, Babel, Webpack</li>
                        <li>Promises, JSON</li>
                        <li>Course by Andrew Mead on Udemy: <a className="card__side--back__link" href="https://www.udemy.com/course/modern-javascript/">Link</a></li>
                    </ul>
                    <div>
                        <img src={js} alt="JS Logo"  width="85" height="85" className="card__side--front-image"/>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card__side card__side--front background-css">
                    <div className="card__side--front-header">React</div>               
                    <div>
                        <img src={react} alt="React Logo"  width="90" height="90" className="card__side--front-image"/>
                    </div>   
                </div>
                <div className="card__side card__side--back background-css">
                    <ul className="card__side--back__list">
                        <li>Simple to understand components</li>
                        <li>React-router, Redux</li>
                        <li>Basic understanding of unit testing in Jest</li>
                        <li>Course by Andrew Mead on Udemy: <a className="card__side--back__link" href="https://www.udemy.com/course/react-2nd-edition/">Link</a></li>
                    </ul>
                    <div>
                        <img src={react} alt="React Logo"  width="90" height="90" className="card__side--front-image"/>
                    </div>
                </div>
            </div>
    
            <div className="card">
                <div className="card__side card__side--front background-html">
                    <div className="card__side--front-header">Git</div>               
                    <div>
                        <img src={git} alt="Git Logo"  width="90" height="90" className="card__side--front-image"/>
                    </div> 
                </div>
                <div className="card__side card__side--back background-html">
                    <ul className="card__side--back__list">
                        <li>Work locally with repo</li>
                        <li>Use GitHub</li>
                        <li>BDFBD</li>
                        <li>Course by Maciej Aniserowicz: <a className="card__side--back__link" href="https://kursgita.pl/">Link</a></li>
                    </ul>
                    <div>
                        <img src={git} alt="Git Logo"  width="90" height="90" className="card__side--front-image"/>
                    </div>
                </div>
            </div>
            </div>

            <div className="margin-medium">&nbsp;</div>

            <Nav/>
        </div>
    )}

export default WelcomePage


