import React from "react";
import styled from "@emotion/styled";
import { TawkContext } from "../providers";
const FooterContainer = styled.footer`
  background: #24262b;
  text-align: center;
  min-height: 150px;
  padding: 35px;
`;
const FooterBottom = styled.div`
  min-height: 35px;
  background: #1b1d21;
`;
const Icon = styled.i`
  font-size: 20px;
  margin: 10px;
  color: white;
  transition: 0.2s;
`;
const Footerlink = styled.a`
  font-size: 15px;
  margin: 10px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: grey;
  }
`;

const MyLink = styled.a`
  text-decoration: none;
`;
const Footer = () => {
  const { tawkMessenger } = React.useContext(TawkContext);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <FooterContainer>
        <div>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <Icon className="bi bi-facebook" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <Icon className="bi bi-instagram" />
          </a>
          <a href="https://www.google.com/intl/en_ca/business/" target="_blank" rel="noreferrer">
            <Icon className="bi bi-google" />
          </a>
          <a target="_blank" rel="noreferrer" href="mailto:mah.hussaina@gmail.com">
            <Icon className="bi bi-envelope-plus" />
          </a>
          <a target="_blank" rel="noreferrer" href="tel:+1613-790-4775">
            <Icon className="bi bi-telephone" />
          </a>
        </div>
        <div className="p-3 ">
          <Footerlink href="#About">About</Footerlink>
          <Footerlink
            onClick={() => {
              tawkMessenger.toggle();
            }}
            href="#"
          >
            Book Now
          </Footerlink>
          <div className="d-sm-none" />
          <Footerlink href="#Packages">Packages</Footerlink>
          <Footerlink href="#Services">Services</Footerlink>
          <Footerlink onClick={scrollTop}>Back To Top</Footerlink>
        </div>
      </FooterContainer>
      <FooterBottom>
        <div
          className="text-center p-2"
          style={{ color: "white", fontSize: 15 }}
        >
          Copyright © {new Date().getFullYear()}; Built by{" "}
          <MyLink
            target="_blank"
            rel="noreferrer"
            href="https://hussainalnakhli.com/"
          >
            Hussain Alnakhli
          </MyLink>
        </div>
      </FooterBottom>
    </>
  );
};

export default Footer;
