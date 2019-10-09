import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'

const ContactPage = () => {
    
    return(
        <div className="content">

            <Header title='Contact'/>
            <div >
                <form className="contact-page">
                    <input type="text" placeholder="your email" className="contact-page__email contact-page__email--user"/>
                    <input type="text" disabled placeholder="wirkus919@gmail.com" className="contact-page__email"/>
                    <textarea className="contact-page__textarea"></textarea>
                    <button className="btn__action">Send</button>
                </form>
            </div>
            <Nav/>
        </div>
    )}

export default ContactPage