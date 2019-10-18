import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import {Link} from 'react-router-dom'

import myPhoto from '../img/me.png'
import {LinkedInIcon, GithubIcon, HackerrankIcon, GmailIcon} from '../Icons/Icons'

const WelcomePage = () => {
    
    return(
        <div className="content">

            <Header title='Tomasz Wirkus' subtitle="Junior fullstack developer"/>
            
            <p className="main-page__text">Hello! My name is Tomasz and I would like to welcome you on my website, feel free to look around.</p>

            <div className="main-page__photo">

                <img src={myPhoto} className="main-page__img-radius"/>
                <div className="main-page__icons">
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
            <Nav/>
        </div>
    )}

export default WelcomePage