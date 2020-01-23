import React from 'react';
import Modal from 'react-modal';

const ModalInfo = props => {
  return (
    <Modal
      isOpen={!!props.infoOpen}
      closeTimeoutMS={200}
      className='modal'
      ariaHideApp={false}
    >
      <h2 className='modal__heading'>{props.title}</h2>
      <div className='modal__paragraphs'>
        {props.paragraph.map(el => (
          <p className='modal__paragraph' key={el}>
            {el}
          </p>
        ))}
      </div>
    </Modal>
  );
};

export default ModalInfo;
