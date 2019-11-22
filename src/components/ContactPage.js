import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import validator from 'validator'

class ContactPage extends React.Component{
    
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
          status: "",
          email: ''
        };
      }
    onEmailChange = (e) => {
        const email = e.target.value
        this.setState(()=> ({email}))  
    }
    
    render(){
        const { status } = this.state;
        return(
            <div className="container">
                <div className="content">
        
                    <Header title='Contact'/>
                    <div >
                        <form
                            onSubmit={this.submitForm}
                            action="https://formspree.io/xkdayzkm"
                            method="POST"
                            className="contact-page"
                        >
                            <input type="email" name="email" placeholder="your email" onChange={this.onEmailChange} className="contact-page__email contact-page__email--user"/>
                            <input type="text" disabled placeholder="wirkus919@gmail.com" className="contact-page__email"/>
                            <textarea name="message" className="contact-page__textarea"></textarea>
                            <button className="btn__action">Submit</button>
                            {status === "ERROR" && <p className="contact-page__info">An Error, please fill email field.</p>}
                            {status === "SUCCESS"  && <p className="contact-page__info">Thanks!</p>}
                        </form>
                    </div>
                    
                </div>
                <Nav/>
            </div>
        )
       
    }

    submitForm(ev) {
        ev.preventDefault();
        const { email } = this.state
            const form = ev.target;
            const data = new FormData(form);
            const xhr = new XMLHttpRequest();
            xhr.open(form.method, form.action);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = () => {
              if (xhr.readyState !== XMLHttpRequest.DONE) return;
              if (xhr.status === 200) {
                form.reset();              
              } 
            };
        if(validator.isEmail(email)){        
            xhr.send(data);
            this.state.email = ''
            this.setState({ status: "SUCCESS" });
        }else {
            this.setState({ status: "ERROR" });
          }         
        }       
}

export default ContactPage


