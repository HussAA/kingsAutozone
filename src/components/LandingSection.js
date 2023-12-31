import React from "react";
import styled from "@emotion/styled";
import Landingimage from '../images/LandingSection.png'



const Slogan = styled.div`
  font-size: 25pt;
  font-family: system-ui;
  font-style: italic;
  color: black;
  @media screen and (max-width: 767px) {
    font-size: 17pt;
  }
  @media screen and (max-width: 521px) {
    font-size: 13pt;
  }
`;
const Overlay = styled.div`
    position: absolute;
    top: 68%;
    left: 25%;
    width: 50%;
    height: auto;
    background-color: rgba(255, 255, 255, 0.6);
    color: white;
    text-align: center;
    padding: 10px;

    @media (max-width:730.1px) {
        left: 20%;
        width: 60%;
        top: 43%;
}
    @media (min-width:1300px){
        top: 93%;
    }
`
const SloganPortfolio = () => {
    return (
      <>
        <div className="container text-center">
          <Overlay className="shadow">
            <Slogan>"Sparkle and Shine, Every Detail in Line!"</Slogan>
          </Overlay>
        </div>
      </>
    );
  };


  const Masthead = styled.div`
  height: 60vh;
  margin-top: auto;
  padding-bottom: calc(10rem - 4.5rem);
  background: linear-gradient(
      to bottom,
      rgba(30, 63, 104, 0.2) 0%,
      rgba(30, 63, 104, 0.6) 100%
    ),
    url(${Landingimage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 1299.6px) {
    height: 85vh;
    min-height: 40rem;
    padding-top: 4.5rem;
    padding-bottom: 0;
  }
  @media (max-width: 730px) {
    height: 35vh;
  }
`;
const LandingSection = () => {
  return (
    <>
      <Masthead>
        <div className="container ">
            <SloganPortfolio />
        </div>
      </Masthead>
    </>
  );
};

export default LandingSection;
