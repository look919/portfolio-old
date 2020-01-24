import React from 'react';
import Modal from 'react-modal';
import me2 from '../img/me2.png';
import {
  ModalAboutMe,
  ModalSkills,
  ModalProjects,
  ModalContact
} from '../Icons/Icons';
const ModalInfo = props => {
  let JsxSvg;

  switch (props.modalSvg) {
    case 0:
      JsxSvg = ModalAboutMe;
      break;
    case 1:
      JsxSvg = ModalSkills;
      break;
    case 2:
      JsxSvg = ModalProjects;
      break;
    case 3:
      JsxSvg = ModalContact;
      break;
    default:
      JsxSvg = ModalProjects;
      break;
  }

  return (
    <Modal
      isOpen={!!props.infoOpen}
      closeTimeoutMS={200}
      className='modal'
      ariaHideApp={false}
    >
      <h2 className='modal__heading'>{props.title}</h2>
      <div className='modal__text'>
        <div className='modal__line modal__line--1'>&nbsp;</div>
        <div className='modal__paragraphs'>
          {props.paragraph.map(el => (
            <p className='modal__paragraph' key={el}>
              {el}
            </p>
          ))}
        </div>
        <div className='modal__line modal__line--2'>&nbsp;</div>
      </div>
      <JsxSvg />
    </Modal>
  );
};

export default ModalInfo;
