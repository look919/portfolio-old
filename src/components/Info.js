import React, { useState } from 'react';
import { InfoIcon, CloseInfoIcon } from './../Icons/Icons';
import Modal from './ModalInfo';
import { useMediaQuery } from 'react-responsive';

const Info = ({ title, paragraph, modalSvg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const is600px = useMediaQuery({ query: '(max-width: 600px)' });

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return title === 'About me' ? (
    <button
      className={!is600px ? 'infomodal infomodal--delayed' : 'infomodal'}
      onClick={handleOpen}
    >
      {!isOpen ? <InfoIcon /> : <CloseInfoIcon />}
      {!isOpen ? (
        <h3 className='infomodal__heading'>Click for more information</h3>
      ) : (
        <h3 className='infomodal__heading'>Close info</h3>
      )}
      <Modal
        handleInfoClose={handleOpen}
        infoOpen={isOpen}
        paragraph={paragraph}
        title={title}
        modalSvg={modalSvg}
      />
    </button>
  ) : (
    <button className='infomodal' onClick={handleOpen}>
      {!isOpen ? <InfoIcon /> : <CloseInfoIcon />}
      {!isOpen ? (
        <h3 className='infomodal__heading'>Click for more information</h3>
      ) : (
        <h3 className='infomodal__heading'>Close info</h3>
      )}
      <Modal
        handleInfoClose={handleOpen}
        infoOpen={isOpen}
        title={title}
        paragraph={paragraph}
        modalSvg={modalSvg}
      />
    </button>
  );
};

export default Info;
