import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import SingleProject from './SingleProject';
const projects = require('../projects.json');

export default class DemoCarousel extends Component {
  render() {
    return (
      <Carousel className='project' showThumbs={false}>
        {projects.map((proj) => (
          <SingleProject key={proj} project={proj} />
        ))}
      </Carousel>
    );
  }
}
