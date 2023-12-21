import React from 'react'
import styled from '@emotion/styled'
import paintProt from '../images/paint-protection.png'

const SectionTitles = styled.div`
  font-size: 12pt;
  color: gray;
  font-family: system-ui;
  margin-bottom: 50px;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;
const SectionHeading = styled.div`
  font-size: 35pt;
  color: white;
  text-align: center;
  @media screen and (max-width:600px) {
    font-size: 25pt;
  }
`;
const SectionDescription = styled.div`
  font-size: 12pt;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #B3B3B3;
  margin-bottom: 40px;
  margin-left: 23px;
  margin-right: 23px;
`;

const Logo = styled.img`
  width: 90px;
  height: 90px;
  
  margin-top: 10px;
`;
const CardTitle = styled.div`
  font-size: 16pt;
  color: black;
  font-weight: bold;
  padding-left: 4px;
  padding-right: 4px;
`;
const CardDescription = styled.div`
  font-size: 16px;
  padding-left: 4px;
  padding-right: 4px;
`;



const ServicesCards = ({ logo, title, description }) => {
  return (
    <>
      <div className="col-6 col-lg-3">
        <div className="text-left service-card paint-protection-pic">
          
          <div className="row mb-4">
            <div className="col">
              <Logo src={logo} alt="service logo" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <CardTitle>{title}</CardTitle>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

const Services = () => {
  return (
    <>
      <SectionTitles id="Services" className="text-center text-uppercase">
        Services
      </SectionTitles>
      <SectionHeading>WHAT I DO</SectionHeading>
      <SectionDescription>
        I am dedicated to providing exceptional photography services that
        capture the essence and beauty of every moment.
      </SectionDescription>
      <div className="container serivce-container-p">
        <div className="row">
          <ServicesCards
            
            // logo={Marriage}
            title="Wedding"
            description="Capture the precious moments of weddings."
          />
          <ServicesCards
            // logo={Fashion}
            title="Fashion"
            description="Offer fashion shoots for models, designers, or clothing brands."
          />
          <ServicesCards
            // logo={Event}
            title="Event"
            description="Cover various events such as conferences, parties, and corporate gatherings."
          />
          <ServicesCards
            // logo={Portrait}
            title="Portrait"
            description="Provide professional portrait sessions for individuals or families."
          />
          <ServicesCards
            // logo={RealEstate}
            title="Real Estate"
            description="Capture properties for real estate agents or homeowners looking to sell or rent."
          />
          <ServicesCards
            // logo={Sports}
            title="Sports"
            description="Cover sporting events, capturing action shots and athlete performances."
          />
          <ServicesCards
            // logo={WildLife}
            title="Wildlife"
            description="Capture the beauty and behavior of animals in their natural habitats."
          />
          <ServicesCards
            // logo={Products}
            title="Products"
            description="Highlight products with high-quality images for e-commerce or advertising purposes."
          />
        </div>
      </div>
    </>
  );
};

export default Services;