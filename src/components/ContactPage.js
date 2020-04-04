import React, { useState } from 'react';
import validator from 'validator';

import Header from './Header';
import Info from './Info';
import Nav from './Nav';

const ContactPage = () => {
  const paragraph = [
    "You can also contact me directly by sending email to wirkus919@gmail.com, I'm open for any kind of cooperation.",
    "Because of my studies I exclude the possibility of moving and I'm only interested in working in Koszalin.",
    'Due to the lack of professional experience, I would prefer not to work remotely.',
  ];

  const [formData, setFormData] = useState({
    email: '',
    message: '',
    status: '',
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (ev) => {
    ev.preventDefault();
    const { email, message } = formData;
    console.log(email);

    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
      }
    };
    if (validator.isEmail(email) && message.length > 7) {
      xhr.send(data);

      setFormData({
        ...formData,
        status: 'SUCCESS',
        email: '',
        message: '',
      });
    } else if (message.length <= 7) {
      setFormData({
        ...formData,
        status: 'SHORT_MESSAGE',
      });
    } else {
      setFormData({
        ...formData,
        status: 'ERROR',
      });
    }
  };

  return (
    <div className='container'>
      <Header title='Contact' />
      <Info title='First step' paragraph={paragraph} modalSvg={3} />
      <div className='content content--contactPage'>
        <form
          onSubmit={submitForm}
          action='https://formspree.io/xkdayzkm'
          method='POST'
          className='contact-page'
        >
          <input
            type='email'
            placeholder='from: email@example.com'
            className='contact-page__email contact-page__email--user'
            value={formData.email}
            name='email'
            onChange={(e) => onChange(e)}
          />
          <input
            disabled
            placeholder='to: wirkus919@gmail.com'
            className='contact-page__email'
          />
          <textarea
            className='contact-page__textarea'
            name='message'
            value={formData.message}
            onChange={(e) => onChange(e)}
          />
          <button className='btn__action'>Submit</button>

          {formData.status === 'ERROR' && (
            <p className='contact-page__info'>
              An Error, please make sure u provided valid email.
            </p>
          )}
          {formData.status === 'SHORT_MESSAGE' && (
            <p className='contact-page__info'>
              I asked you to leave me a message, not a test spam.
            </p>
          )}
          {formData.status === 'SUCCESS' && (
            <p className='contact-page__info'>Thanks!</p>
          )}
        </form>
      </div>
      <Nav />
    </div>
  );
};

export default ContactPage;
