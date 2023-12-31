import React from "react";
import styled from "@emotion/styled";
import _ from "lodash";

const SectionTitles = styled.div`
  font-size: 12pt;
  color: #646363;
  font-family: system-ui;
  margin-bottom: 50px;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;
const SectionHeading = styled.div`
  font-size: 35pt;
  color: black;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 25pt;
  }
`;
const SectionDescription = styled.div`
  font-size: 12pt;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #8e8d8d;
  margin-bottom: 50px;
  margin-left: 23px;
  margin-right: 23px;
`;

const CardTitle = styled.div`
  font-size: 16pt;
  color: black;
  font-weight: bold;
  padding-left: 4px;
  padding-right: 4px;
`;
const Description = styled.div`
  font-size: 15px;
  margin-top: 10px;
`;
const OddCard = styled.div`
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.22);
  height: auto;
  min-height: 330px;
  width: auto;
  min-width: 170px;
  margin: auto;
  background: #574a46;
  margin-bottom: 15px;
`;
const EvenCard = styled.div`
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.22);
  height: auto;
  min-height: 330px;
  width: auto;
  min-width: 170px;
  margin: auto;
  background: #c98968;
  margin-bottom: 15px;
`;
const ItemsTitle = styled.div`
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;
const Logo = styled.i`
  border-radius: 50%;
  padding: 7px 10px 7px 10px;
  color: lightgray;
  background-color: #1e3f68;
  border: 1px solid blue;
  font-size: 18px;
  margin-top: 30px;
`;

const Services = () => {
  return (
    <>
      <SectionTitles id="Services" className="text-center text-uppercase">
        Services
      </SectionTitles>
      <SectionHeading>WHAT WE OFFER</SectionHeading>
      <SectionDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </SectionDescription>
      <div className="container">
        <div className="row">
          
          <div className="col-12 col-sm-6 ">
            <div className="row">
              <div className="col-2 mt-4">
                <Logo className="bi bi-bookmark-check" />
              </div>
              <div className="col-10">
                <ItemsTitle>Auto Detailings</ItemsTitle>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Description>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 mb-4">
            <div className="row">
              <div className="col-2 mt-4">
                <Logo className="bi bi-bookmark-check" />
              </div>

              <div className="col-10">
                <ItemsTitle>Paint Protection</ItemsTitle>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Description>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 ">
            <div className="row">
              <div className="col-2 mt-4">
                <Logo className="bi bi-bookmark-check" />
              </div>

              <div className="col-10">
                <ItemsTitle>Fabric Protection</ItemsTitle>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Description>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 mb-4">
            <div className="row">
              <div className="col-2 mt-4">
                <Logo className="bi bi-bookmark-check" />
              </div>

              <div className="col-10">
                <ItemsTitle>Leather Protection</ItemsTitle>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Description>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 ">
            <div className="row">
              <div className="col-2 mt-4">
                <Logo className="bi bi-bookmark-check" />
              </div>

              <div className="col-10">
                <ItemsTitle>Decal Remover</ItemsTitle>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Description>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 mb-4">
            <div className="row">
              <div className="col-2 mt-4">
                <Logo className="bi bi-bookmark-check" />
              </div>

              <div className="col-10">
                <ItemsTitle>Ceramic Coating</ItemsTitle>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Description>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 ">
            <div className="row">
              <div className="col-2 mt-4">
                <Logo className="bi bi-bookmark-check" />
              </div>

              <div className="col-10">
                <ItemsTitle>Polishing & Paint Correction</ItemsTitle>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Description>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 ">
            <div className="row">
              <div className="col-2 mt-4">
                <Logo className="bi bi-bookmark-check" />
              </div>

              <div className="col-10">
                <ItemsTitle>Headlights restoration</ItemsTitle>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Description>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
