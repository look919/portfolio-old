import React from 'react'
import Header from './Header'
import Nav from './Nav'
import {Link} from 'react-router-dom'

import myPhoto from '../img/me.png'

import {LinkedInIcon, GithubIcon, HackerrankIcon, GmailIcon} from '../Icons/Icons'

const AboutMePage = () => {
    
    return(
        <div className="content">

            <Header title='About me'/>
            <div className="about-me">
                <ul className="about-me__list">
                    <li className="about-me__item">Name: <span className="about-me__item--answer"> Tomasz </span></li>
                    <li className="about-me__item">Surname: <span className="about-me__item--answer"> Wirkus </span></li>
                    <li className="about-me__item">Age: <span className="about-me__item--answer"> 21 </span></li>
                    <li className="about-me__item">Status: <span className="about-me__item--answer"> Student </span></li>
                    <li className="about-me__item">Field of study: <span className="about-me__item--answer"> IT </span></li>
                    <li className="about-me__item">Languages: <span className="about-me__item--answer"> Polish - Native, English - B2, Italian - A1 </span></li>
                    <li className="about-me__item">Goal: <span className="about-me__item--answer"> Fullstack Developer </span></li>
                    <li className="about-me__item">Email: <span className="about-me__item--answer"> wirkus919@gmail.com </span></li>
                </ul>
                <div className="about-me__info">                  
                    <div className="about-me__text">
                        <p>I started programming at the beginning of my studies but it absorbed me right away.
                        I began with C++ and became interested in the Qt framework relatively quickly,
                        I wrote simple windowed programs in it, I also spent a lot of time solving algorithms from hackerrank.
                        After a few months I became interested in web programming and thats what I plan to tie my future with, 
                        because thats what gives me the biggest joy. Currently, I spend much more time on the
                        front-end but plans to focus also on back-end to become a fullstack developer.</p>
                    </div>
                    <div className="about-me__photo">
                        <img src={myPhoto} className="main-page__img-radius"/>
                        <div className="main-page__icons">
                            <a href='https://github.com/look919' target="_blank">
                                <LinkedInIcon />
                            </a>                     
                            <a href='https://github.com/look919' target="_blank">
                                <GithubIcon />
                            </a>
                            <a href='https://www.hackerrank.com/wirkustomasz919' target="_blank">
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

export default AboutMePage