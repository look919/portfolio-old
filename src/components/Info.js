import React from 'react';
import { InfoIcon, CloseInfoIcon } from '../Icons/Icons';
import Modal from './ModalInfo';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    infoOpen: false,
    paragraph: this.props.paragraph
  };

  handleInfoState = () => {
    if (this.state.infoOpen === false) {
      this.setState(() => ({
        infoOpen: true
      }));
    } else {
      this.setState(() => ({
        infoOpen: false
      }));
    }
  };

  render() {
    return this.props.title === 'About me' ? (
      <button
        className='infomodal infomodal--delayed'
        onClick={this.handleInfoState}
      >
        {this.state.infoOpen === false ? <InfoIcon /> : <CloseInfoIcon />}
        {this.state.infoOpen === false ? (
          <h3 className='infomodal__heading'>Click for more information</h3>
        ) : (
          <h3 className='infomodal__heading'>Close info</h3>
        )}
        <Modal
          handleInfoClose={this.handleInfoState}
          infoOpen={this.state.infoOpen}
          paragraph={this.state.paragraph}
          title={this.props.title}
          modalSvg={this.props.modalSvg}
        />
      </button>
    ) : (
      <button className='infomodal' onClick={this.handleInfoState}>
        {this.state.infoOpen === false ? <InfoIcon /> : <CloseInfoIcon />}
        {this.state.infoOpen === false ? (
          <h3 className='infomodal__heading'>Click for more information</h3>
        ) : (
          <h3 className='infomodal__heading'>Close info</h3>
        )}
        <Modal
          handleInfoClose={this.handleInfoState}
          infoOpen={this.state.infoOpen}
          title={this.props.title}
          paragraph={this.state.paragraph}
          modalSvg={this.props.modalSvg}
        />
      </button>
    );
  }
}
