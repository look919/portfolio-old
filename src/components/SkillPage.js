import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'

import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/js.png'
import react from '../img/react.png'
import git from '../img/git.png'


const WelcomePage = () => {
    
    return(
        <div className="content">

            <Header title='Skills'/>

            <div>
                <div className="card">
                    <div className="card__side card__side--front background-html">
                        <div className="card__side--front-header">HTML</div>               
                        <div className="card__side--front-image">
                            <img src={html} alt="HTML Logo"  width="90" height="90"/>
                        </div> 
                    </div>
                    <div className="card__side card__side--back background-html">
                        <ul>
                            <li>Work locally with repo</li>
                            <li>Use GitHub</li>
                            <li>BDFBD</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <div className="card">
                    <div className="card__side card__side--front background-css">
                        <div className="card__side--front-header">CSS & Sass</div>               
                        <div className="card__side--front-image">
                            <img src={css} alt="CSS Logo"  width="90" height="90"/>
                        </div>   
                    </div>
                    <div className="card__side card__side--back background-css">
                        <ul>
                            <li>Work locally with repo</li>
                            <li>Use GitHub</li>
                            <li>BDFBD</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <div className="card">
                    <div className="card__side card__side--front background-js">
                        <div className="card__side--front-header">Javascript</div>               
                        <div className="card__side--front-image">
                            <img src={js} alt="JS Logo"  width="90" height="90"/>
                        </div>   
                    </div>
                    <div className="card__side card__side--back background-js">
                        <ul>
                            <li>Work locally with repo</li>
                            <li>Use GitHub</li>
                            <li>BDFBD</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <div className="card">
                    <div className="card__side card__side--front background-css">
                        <div className="card__side--front-header">React</div>               
                        <div className="card__side--front-image">
                            <img src={react} alt="React Logo"  width="90" height="90"/>
                        </div>   
                    </div>
                    <div className="card__side card__side--back background-css">
                        <ul>
                            <li>Work locally with repo</li>
                            <li>Use GitHub</li>
                            <li>BDFBD</li>
                        </ul>
                    </div>
                </div>
            </div>
        
            <div>
                <div className="card">
                    <div className="card__side card__side--front background-html">
                        <div className="card__side--front-header">Git</div>               
                        <div className="card__side--front-image">
                            <img src={git} alt="Git Logo"  width="90" height="90"/>
                        </div> 
                    </div>
                    <div className="card__side card__side--back background-html">
                        <ul>
                            <li>Work locally with repo</li>
                            <li>Use GitHub</li>
                            <li>BDFBD</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="margin-medium">&nbsp;</div>

            <Nav/>
        </div>
    )}

export default WelcomePage


