import React from "react";
import { Abouts, Content, Img, ImgAbout, Paragraph } from "./aboutStyle";
import Imgabout from "./../../images/image-interactive.jpg";
import { Pop } from "../feature/featureStyle";

const About = () => {
  return (
    <div className="container-section">
      <Pop>
        <h3>about us </h3>
        <span feature></span>
      </Pop>
      <Abouts>
      <ImgAbout>
        <Img src={Imgabout} alt="sorry somthing go wrrang " />
      </ImgAbout>
      <Content>
        <h1>the learned in interactive VR </h1>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          officiis sequi vero exercitationem, explicabo dolores laudantium. Unde
          magni cupiditate cumque!
         </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et in
          placeat eos recusandae at dolore necessitatibus earum. Delectus, porro
          placeat nostrum eveniet officia error?
        </Paragraph>
      </Content>
    </Abouts>
    </div>
  );
};
export default About;
