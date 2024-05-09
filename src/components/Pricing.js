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
  padding: 40px 25px 40px 25px;
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
  white-space: nowrap;
  color: black;
  text-align: center;
  background: #e0bd01;
  width: 75%;
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

      <div className="container-full px-3">
        <div className="row gutter gy-3">
          <div className="col-md-6 col-xl-3">
            <Card>
              <Title>
                <i className="bi bi-circle-half" />
                Basic Package
              </Title>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </Description>
              <Price>
                $149 <Pricespan>/ Starting</Pricespan>
              </Price>
              <ItemArray
                text={["Full interior deep clean - degrease and steam."]}
              />
              <ItemArray text={["Interior protectant dressing"]} />
              <ItemArray text={["All mats clean ( carpet and rubber)"]} />
              <ItemArray text={["Carpet shampoo"]} />
              <ItemArray text={["Seat shampoo / leather conditioning"]} />
              <ItemArray text={["Headliner shampoo"]} />
              <ItemArray text={["All Glass surface clean"]} />
              <ItemArray text={["Deodrize"]} />
              <ItemArray text={["Door jambs clean"]} />
              <ItemArrayX text={["Exterior hand wash"]} />
              <ItemArrayX text={["Exterior hand dry"]} />
              <ItemArrayX text={["Tire and rim shine"]} />
              <ItemArrayX text={["Exterior hand wax"]} />
              <ItemArrayX text={["Engine bay shampoo"]} />
              <ItemArrayX text={["Chrome Restoration"]} />
              <ItemArrayX
                text={["Fabric protectant (water and spill-proof)"]}
              />
              <ItemArrayX text={["Clay bar treatment"]} />
              <ItemArrayX text={["One step polish"]} />
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
          <div className="col-md-6 col-xl-3">
            <Card>
              <Title>
                <i className="bi bi-circle-half" />
                Standard Package
              </Title>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </Description>
              <Price>
                $199 <Pricespan>/ Starting</Pricespan>
              </Price>
              <ItemArray
                text={["Full interior deep clean - degrease and steam."]}
              />
              <ItemArray text={["Interior protectant dressing"]} />
              <ItemArray text={["All mats clean ( carpet and rubber)"]} />
              <ItemArray text={["Carpet shampoo"]} />
              <ItemArray text={["Seat shampoo / leather conditioning"]} />
              <ItemArray text={["Headliner shampoo"]} />
              <ItemArray text={["All Glass surface clean"]} />
              <ItemArray text={["Deodrize"]} />
              <ItemArray text={["Door jambs clean"]} />
              <ItemArray text={["Exterior hand wash"]} />
              <ItemArray text={["Exterior hand dry"]} />
              <ItemArray text={["Tire and rim shine"]} />
              <ItemArrayX text={["Exterior hand wax"]} />
              <ItemArrayX text={["Engine bay shampoo"]} />
              <ItemArrayX text={["Chrome Restoration"]} />
              <ItemArrayX
                text={["Fabric protectant (water and spill-proof)"]}
              />
              <ItemArrayX text={["Clay bar treatment"]} />
              <ItemArrayX text={["One step polish"]} />
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

              <Note>$229 for 7 seater</Note>
            </Card>
          </div>
          <div className="col-md-6 col-xl-3">
            <Card>
              <Title>
                <i className="bi bi-circle-half" />
                Premium Package
              </Title>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </Description>
              <Price>
                $229 <Pricespan>/ Starting</Pricespan>
              </Price>
              <ItemArray
                text={["Full interior deep clean - degrease & steam."]}
              />
              <ItemArray text={["Interior protectant dressing"]} />
              <ItemArray text={["All mats clean ( carpet & rubber)"]} />
              <ItemArray text={["Carpet shampoo"]} />
              <ItemArray text={["Seat shampoo / leather conditioning"]} />
              <ItemArray text={["Headliner shampoo"]} />
              <ItemArray text={["All Glass surface clean"]} />
              <ItemArray text={["Deodrize"]} />
              <ItemArray text={["Door jambs clean"]} />
              <ItemArray text={["Exterior hand wash"]} />
              <ItemArray text={["Exterior hand dry"]} />
              <ItemArray text={["Tire and rim shine"]} />
              <ItemArray text={["Exterior hand wax"]} />
              <ItemArray text={["Engine bay shampoo"]} />
              <ItemArray text={["Chrome Restoration"]} />
              <ItemArrayX
                text={["Fabric protectant (water and spill-proof)"]}
              />
              <ItemArrayX text={["Clay bar treatment"]} />
              <ItemArrayX text={["One step polish"]} />
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

              <Note>$259 for 7 seater</Note>
            </Card>
          </div>
          <div className="col-md-6 col-xl-3">
            <Card>
              <Title>
                <i className="bi bi-circle-half" />
                Deluxe Package
              </Title>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </Description>
              <Price>
                $269 <Pricespan>/ Starting</Pricespan>
              </Price>
              <ItemArray
                text={["Full interior deep clean - degrease and steam."]}
              />
              <ItemArray text={["Interior protectant dressing"]} />
              <ItemArray text={["All mats clean ( carpet and rubber)"]} />
              <ItemArray text={["Carpet shampoo"]} />
              <ItemArray text={["Seat shampoo / leather conditioning"]} />
              <ItemArray text={["Headliner shampoo"]} />
              <ItemArray text={["All Glass surface clean"]} />
              <ItemArray text={["Deodrize"]} />
              <ItemArray text={["Door jambs clean"]} />
              <ItemArray text={["Exterior hand wash"]} />
              <ItemArray text={["Exterior hand dry"]} />
              <ItemArray text={["Tire and rim shine"]} />
              <ItemArray text={["Exterior hand wax"]} />
              <ItemArray text={["Engine bay shampoo"]} />
              <ItemArray text={["Chrome Restoration"]} />
              <ItemArray text={["Fabric protectant (water and spill-proof)"]} />
              <ItemArray text={["Clay bar treatment"]} />
              <ItemArray text={["One step polish"]} />
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

              <Note>$299 for 7 seater</Note>
            </Card>
          </div>
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
const ItemArrayX = ({ text }) => {
  return (
    <>
      {_.isArray(text) && (
        <>
          {text.map((v, i) => {
            return (
              <React.Fragment key={i}>
                <Bullet className="text-decoration-line-through text-black-50">
                  <CheckStyle className="bi bi-bookmark-x-fill" />
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
