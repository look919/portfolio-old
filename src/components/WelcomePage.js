import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'

import myPhoto from '../img/me.png'

const WelcomePage = () => {
    
    return(
        <div className="content">

            <Header title='Tomasz Wirkus'/>

            <p className="main-page__text">Hello! My name is Tomasz and I would like to welcome you on my website. I work everyday to become Junior fullstack developer</p>
            <img src={myPhoto} className="main-page__img-radius"/>
            <div className="main-page__icons">Icons</div>

            <Nav/>
        </div>
    )}

export default WelcomePage