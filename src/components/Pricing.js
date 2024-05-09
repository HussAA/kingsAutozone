import React from "react";
import styled from "@emotion/styled";
import _ from "lodash";
import { Button } from "@mui/material";
import { TawkContext } from "../providers";
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
  text-transform: uppercase;
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
const Card = styled.div`
  padding: 40px 5px 40px 25px;
  border-radius: 10px;
  border: 1px solid rgb(190, 190, 190);
  border-color: #e0bd01;
  box-shadow: 0px 8px 20px #f4f4f4, -10px 5px 15px #f4f4f4,
    10px 5px 15px #f4f4f4;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 10px;
  i {
    margin-right: 10px;
  }
`;
const Description = styled.div`
  font-size: 15px;
`;

const Price = styled.div`
  font-size: 35px;
  display: inline-block;
  padding-bottom: 20px;
`;
const Pricespan = styled.div`
  font-size: 15px;
  color: gray;
  display: inline-block;
`;
const CheckStyle = styled.i`
  font-size: 20px;
  margin-right: 15px;
  
`;
const Bullet = styled.div`
  display: flex;
  align-items: flex-start; /* Align items at the start of the flex container */
  padding-bottom: 7px;

`;
const ButtonStyle = styled(Button)`
  color: black;
  text-align: center;
  background: #e0bd01;
  padding: 10px 80px 10px 80px;
  &:hover {
    background: #c5a703;
  }
`;
const Note = styled.div`
  text-align: center;
  font-size: 15px;
  color: gray;

`;
const Packages = () => {
  const { tawkMessenger } = React.useContext(TawkContext);
  return (
    <>
      <SectionTitles id="Services" className="text-center text-uppercase">
        Packages
      </SectionTitles>
      <SectionHeading>our packages</SectionHeading>
      <SectionDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </SectionDescription>

      <div className="container">
        <div className="row">
          <Card className="col-md-6 col-xl-3">
            <Title>
              <i className="bi bi-circle-half" />
              Basic
            </Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </Description>
            <Price>
              $149 <Pricespan>/ Starting</Pricespan>
            </Price>
            <ItemArray text={["Complete interior deep clean - degrease and steam clean"]} />
            <ItemArray text={["Interior protectant dressing"]} />
            <ItemArray text={["All mats clean ( carpet and rubber)"]} />
            <ItemArray text={["Carpet shampoo"]} />
            <ItemArray text={["Cloth seat shampoo/ leather seats condition"]} />
            <ItemArray text={["Headliner shampoo"]} />
            <ItemArray text={["All Glass surface clean"]} />
            <ItemArray text={["Deodrize"]} />
            <ItemArray text={["Door jambs clean"]} />
            <div className="text-center py-4">
              <ButtonStyle
                onClick={() => {
                  tawkMessenger.toggle();
                }}
                variant="contained"
              >
                Book Now
              </ButtonStyle>
            </div>

            <Note>$179 for 7 seater</Note>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Packages;

const ItemArray = ({ text }) => {
  return (
    <>
      {_.isArray(text) && (
        <>
          {text.map((v, i) => {
            return (
              <React.Fragment key={i}>
                <Bullet>
                  <CheckStyle className="bi bi-bookmark-check-fill" />
                  {v}
                </Bullet>
              </React.Fragment>
            );
          })}
        </>
      )}
    </>
  );
};
