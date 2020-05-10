import React from "react";
import Header from "./Header";
import Info from "./Info";
import Nav from "./Nav";
import Carousel from "./Carousel";

const ProjectsPage = () => {
  const paragraph = [
    "I decided not to include projects from online courses in the portfolio, despite the fact that their creation was very important in my development, I wrote all the projects in the portfolio 100% by myself.",
    "The most important projects of mine for now are TomOffice(still in development) and HotelGiant, both made in MERN stack. The first is an online shop, the second is application for a hotel. Both apps are made with an idea to get overview of a services that those companies can sell. Besides that in both apps potential customers can create their own account, make an order online and contact with company.",
  ];

  return (
    <div className="container">
      <Header title="Projects" />
      <Info title="My works" paragraph={paragraph} modalSvg={2} />
      <div className="content content--projectPage">
        <Carousel />
      </div>
      <Nav />
    </div>
  );
};

export default ProjectsPage;
