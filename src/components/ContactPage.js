import React, { useState } from 'react';
import validator from 'validator';
import Header from './Header';
import Nav from './Nav';
import { FormattedMessage } from 'react-intl';

const ContactPage = () => {
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

      setTimeout(() => {
        setFormData({
          ...formData,
          status: '',
        });
      }, 2500);
    } else if (message.length <= 7) {
      setFormData({
        ...formData,
        status: 'SHORT_MESSAGE',
      });

      setTimeout(() => {
        setFormData({
          ...formData,
          status: '',
        });
      }, 2500);
    } else {
      setFormData({
        ...formData,
        status: 'ERROR',
      });
      setTimeout(() => {
        setFormData({
          ...formData,
          status: '',
        });
      }, 2500);
    }
  };

  return (
    <div className='container'>
      <Header
        title={<FormattedMessage id='Nav.contact' defaultMessage='Contact' />}
      />
      <div className='content content--contactPage'>
        <div className='info'>
          <p className='info__p'>
            <FormattedMessage
              id='ContactPage.paragraphOne'
              defaultMessage="You can also contact me directly by sending email to
              wirkus919@gmail.com, I'm open for any kind of cooperation."
            />
          </p>
          <p className='info__p'>
            <FormattedMessage
              id='ContactPage.paragraphTwo'
              defaultMessage="Because of my studies I exclude the possibility of moving and I'm
              only interested in working in Koszalin."
            />
          </p>
        </div>
        <form
          onSubmit={submitForm}
          action='https://formspree.io/xkdayzkm'
          method='POST'
          className='contact-page'
        >
          <FormattedMessage
            id='ContactPage.from'
            defaultMessage='from: email@example.com'
          >
            {(msg) => (
              <input
                type='email'
                placeholder={msg}
                className='contact-page__email contact-page__email--user'
                value={formData.email}
                name='email'
                onChange={(e) => onChange(e)}
              />
            )}
          </FormattedMessage>
          <FormattedMessage
            id='ContactPage.to'
            defaultMessage='to: wirkus919@gmail.com'
          >
            {(msg) => (
              <input
                disabled
                placeholder={msg}
                className='contact-page__email'
              />
            )}
          </FormattedMessage>

          <textarea
            className='contact-page__textarea'
            name='message'
            value={formData.message}
            onChange={(e) => onChange(e)}
          />
          <button className='btn__action'>
            <FormattedMessage id='ContactPage.btn' defaultMessage='Submit' />
          </button>

          {formData.status === 'ERROR' && (
            <p className='contact-page__info'>
              <FormattedMessage
                id='ContactPage.error'
                defaultMessage='An Error, please make sure u provided valid email.'
              />
            </p>
          )}
          {formData.status === 'SHORT_MESSAGE' && (
            <p className='contact-page__info'>
              <FormattedMessage
                id='ContactPage.short'
                defaultMessage='I asked you to leave me a message, not a test spam.'
              />
            </p>
          )}
          {formData.status === 'SUCCESS' && (
            <p className='contact-page__info'>
              <FormattedMessage
                id='ContactPage.success'
                defaultMessage='Thanks!'
              />
            </p>
          )}
        </form>
      </div>
      <Nav />
    </div>
  );
};

export default ContactPage;
