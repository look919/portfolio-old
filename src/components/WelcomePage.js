import React from 'react'
import Header from './Header'
import Nav from './Nav'
import {Link} from 'react-router-dom'

import myPhoto from '../img/me.png'
import {LinkedInIcon, GithubIcon, HackerrankIcon, GmailIcon} from '../Icons/Icons'

const WelcomePage = () => {
    
    return(
        <div className="container">
            <Header title='Tomasz Wirkus'/>
            <div className="content content--welcomePage">                
                <p className="main-page__text">
                    Hello! My name is Tomasz and I would like to welcome you on my website, feel free to look around.
                </p>
                <div className="about-me">
                    <ul className="about-me__list">
                        <li className="about-me__item">Name: <span className="about-me__item--answer"> Tomasz </span></li>
                        <li className="about-me__item">Surname: <span className="about-me__item--answer"> Wirkus </span></li>
                        <li className="about-me__item">Age: <span className="about-me__item--answer"> 21 </span></li>
                        <li className="about-me__item">Status: <span className="about-me__item--answer"> Student </span></li>
                        <li className="about-me__item">Field of study: <span className="about-me__item--answer"> IT </span></li>
                        <li className="about-me__item">Languages: <span className="about-me__item--answer"> Polish - Native, English - B2, Italian - A1 </span></li>
                        <li className="about-me__item">Email: <span className="about-me__item--answer"> wirkus919@gmail.com </span></li>
                    </ul>
                    <div className="my-photo about-me__photo">
                        <img src={myPhoto} className="my-photo__img-radius"/>
                        <div className="my-photo__icons">
                            <a href='https://github.com/look919'>
                                <LinkedInIcon />
                            </a>                     
                            <a href='https://github.com/look919'>
                                <GithubIcon />
                            </a>
                            <a href='https://www.hackerrank.com/wirkustomasz919'>
                                <HackerrankIcon />
                            </a>
                                <Link to='/contact'>
                                <GmailIcon />
                            </Link>
                        </div>
                    </div>
                </div>
                 
            </div>
            <Nav/>
        </div>

        
    )}

export default WelcomePage