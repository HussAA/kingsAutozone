import React from "react";
import styled from "@emotion/styled";
import _ from "lodash";
import { Button } from "@mui/material";
import { TawkContext } from "../providers";
import AddOn from "./AddOn";

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
  position: relative;
  padding: 40px 25px 40px 25px;
  border-radius: 10px;
  border: 1px solid rgb(190, 190, 190);
  border-color: #e0bd01;
  box-shadow: 0px 8px 20px #f4f4f4, -10px 5px 15px #f4f4f4,
    10px 5px 15px #f4f4f4;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const CardB = styled.div`
  background: #1c1c1c;
  position: relative;
  padding: 40px 25px 40px 25px;
  border-radius: 10px;
  box-shadow: 0px 8px 20px #f4f4f4, -10px 5px 15px #f4f4f4,
    10px 5px 15px #f4f4f4;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const ItemsContainer = styled.div`
  flex: 1;
`;
const CardFooter = styled.div`
  margin-top: auto;
`;
const TitleB = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 10px;
  color: white;
  i {
    margin-right: 10px;
  }
`;
const DescriptionB = styled.div`
  font-size: 15px;
  color: white;
`;
const PriceB = styled.div`
  font-size: 35px;
  display: inline-block;
  padding-bottom: 20px;
  color: white;
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
  align-items: flex-start;
  padding-bottom: 7px;
`;
const BulletB = styled.div`
  display: flex;
  align-items: flex-start;
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
const Alert = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 30px;
  margin-bottom: 5px;
  padding: 10px;
  background: #d6b819;
  font-weight: 650;
  border-radius: 0px 0px 10px 10px;
`;

const Packages = () => {
  const { tawkMessenger } = React.useContext(TawkContext);
  return (
    <>
      <SectionTitles className="text-center text-uppercase">
        Packages
      </SectionTitles>
      <SectionHeading>our packages</SectionHeading>
      <SectionDescription>
        Elevate your car's look and protection with our ceramic coating
        packages, ensuring long-lasting shine and defense against the elements.
      </SectionDescription>

      <div className="container-full px-5 px-md-3">
        <div className="row gutter gy-3 align-items-stretch">

          {/* Card 1 */}
          <div className="col-md-6 col-xl-3 d-flex">
            <Card>
              <Title>
                <i className="bi bi-circle-half" />
                Knight's Noble Interior
              </Title>
              <Description>
                A distinguished interior-only service, meticulously designed to
                restore your vehicle's cabin.
              </Description>
              <Price>
                $149 <Pricespan>/ Starting</Pricespan>
              </Price>
              <ItemsContainer>
                <ItemArray text={["Full interior deep clean - degrease and steam."]} />
                <ItemArray text={["Full interior steam clean & sanitizing"]} />
                <ItemArray text={["Interior surface protectant"]} />
                <ItemArray text={["Mat cleaning (carpet & rubber)"]} />
                <ItemArray text={["Carpet shampoo & extraction"]} />
                <ItemArray text={["Cloth seat shampoo / leather seats conditioning"]} />
                <ItemArray text={["Headliner spot cleaning"]} />
                <ItemArray text={["Interior glass cleaned"]} />
                <ItemArray text={["Premium deodorizer"]} />
                <ItemArray text={["Door jambs cleaned"]} />
                <ItemArray text={["Trunk & spare tire area cleaned"]} />
              </ItemsContainer>
              <CardFooter>
                <div className="text-center py-4">
                  <ButtonStyle onClick={() => tawkMessenger.toggle()} variant="contained">
                    Book Now
                  </ButtonStyle>
                </div>
                <Note>$179 (7 passenger SUV/ Mini Van/ Pickup Truck)</Note>
              </CardFooter>
            </Card>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 col-xl-3 d-flex">
            <Card>
              <Title>
                <i className="bi bi-circle-half" />
                Prince's Prestige Wash
              </Title>
              <Description>
                An exceptional service crafted to elevate both interior and exterior of your vehicle.
              </Description>
              <Price>
                $199 <Pricespan>/ Starting</Pricespan>
              </Price>
              <ItemsContainer>
                <ItemArray text={["Full interior deep clean - degrease and steam."]} />
                <ItemArray text={["Full interior steam clean & sanitizing"]} />
                <ItemArray text={["Interior surface protectant"]} />
                <ItemArray text={["Mat cleaning (carpet & rubber)"]} />
                <ItemArray text={["Carpet shampoo & extraction"]} />
                <ItemArray text={["Cloth seat shampoo / leather seats conditioning"]} />
                <ItemArray text={["Headliner spot cleaning"]} />
                <ItemArray text={["Interior glass cleaned"]} />
                <ItemArray text={["Premium deodorizer"]} />
                <ItemArray text={["Door jambs cleaned"]} />
                <ItemArray text={["Trunk & spare tire area cleaned Exterior"]} />
                <ItemArray text={["Hand wash"]} />
                <ItemArray text={["Hand dry"]} />
                <ItemArray text={["Tire and rim shine"]} />
              </ItemsContainer>
              <CardFooter>
                <div className="text-center py-4">
                  <ButtonStyle onClick={() => tawkMessenger.toggle()} variant="contained">
                    Book Now
                  </ButtonStyle>
                </div>
                <Note>$249 (7 passenger SUV/ Mini Van/ Pickup Truck)</Note>
              </CardFooter>
            </Card>
          </div>

          {/* Card 3 - Dark / Best Deal */}
          <div className="col-md-6 col-xl-3 d-flex">
            <CardB>
              <Alert>Best Deal</Alert>
              <TitleB>
                <i className="bi bi-circle-half" />
                King's Kingdom Cleaning
              </TitleB>
              <DescriptionB>
                the ultimate full interior and exterior detail, crowned with a deep engine shampoo for a truly majestic clean.
              </DescriptionB>
              <PriceB>
                $229 <Pricespan>/ Starting</Pricespan>
              </PriceB>
              <ItemsContainer>
                <ItemArrayB text={["Full interior steam clean & sanitizing"]} />
                <ItemArrayB text={["Interior surface protectant"]} />
                <ItemArrayB text={["Mat cleaning (carpet & rubber)"]} />
                <ItemArrayB text={["Carpet shampoo & extraction"]} />
                <ItemArrayB text={["Cloth seat shampoo / leather seats conditioning"]} />
                <ItemArrayB text={["Headliner spot cleaning"]} />
                <ItemArrayB text={["Interior glass cleaned"]} />
                <ItemArrayB text={["Premium deodorizer"]} />
                <ItemArrayB text={["Door jambs cleaned"]} />
                <ItemArrayB text={["Trunk & spare tire area cleaned"]} />
                <ItemArrayB text={["Hand wash"]} />
                <ItemArrayB text={["Hand dry"]} />
                <ItemArrayB text={["Tire and rim shine"]} />
                <ItemArrayB text={["Ceramic hand wax"]} />
                <ItemArrayB text={["Engine bay shampoo"]} />
                <ItemArrayB text={["Chrome Restoration"]} />
              </ItemsContainer>
              <CardFooter>
                <div className="text-center py-4">
                  <ButtonStyle onClick={() => tawkMessenger.toggle()} variant="contained">
                    Book Now
                  </ButtonStyle>
                </div>
                <Note>$279 (7 passenger SUV/ Mini Van/ Pickup Truck)</Note>
              </CardFooter>
            </CardB>
          </div>

          {/* Card 4 */}
          <div className="col-md-6 col-xl-3 d-flex">
            <Card>
              <Title>
                <i className="bi bi-circle-half" />
                Emperor's Elite Enhancement
              </Title>
              <Description>
                Full interior and exterior detailing, engine shampoo, paint decontamination, clay bar treatment, and polish for the ultimate royal finish.
              </Description>
              <Price>
                $299 <Pricespan>/ Starting</Pricespan>
              </Price>
              <ItemsContainer>
                <ItemArray text={["Full interior steam clean & sanitizing"]} />
                <ItemArray text={["Interior surface protectant"]} />
                <ItemArray text={["Mat cleaning (carpet & rubber)"]} />
                <ItemArray text={["Carpet shampoo & extraction"]} />
                <ItemArray text={["Cloth seat shampoo / leather seats conditioning"]} />
                <ItemArray text={["Headliner spot cleaning"]} />
                <ItemArray text={["Interior glass cleaned"]} />
                <ItemArray text={["Premium deodorizer"]} />
                <ItemArray text={["Door jambs cleaned"]} />
                <ItemArray text={["Trunk & spare tire area cleaned Exterior"]} />
                <ItemArray text={["Hand wash"]} />
                <ItemArray text={["Hand dry"]} />
                <ItemArray text={["Ceramic hand wax"]} />
                <ItemArray text={["Engine bay shampoo"]} />
                <ItemArray text={["Chrome Restoration"]} />
                <ItemArray text={["Paint decontamination wash"]} />
                <ItemArray text={["Clay bar treatment"]} />
                <ItemArray text={["One step polish"]} />
                <ItemArray text={["Ceramic wax"]} />
              </ItemsContainer>
              <CardFooter>
                <div className="text-center py-4">
                  <ButtonStyle onClick={() => tawkMessenger.toggle()} variant="contained">
                    Book Now
                  </ButtonStyle>
                </div>
                <Note>$379 (7 passenger SUV/ Mini Van/ Pickup Truck)</Note>
              </CardFooter>
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
          {text.map((v, i) => (
            <React.Fragment key={i}>
              <Bullet>
                <CheckStyle className="bi bi-bookmark-check-fill" />
                {v}
              </Bullet>
            </React.Fragment>
          ))}
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
          {text.map((v, i) => (
            <React.Fragment key={i}>
              <Bullet className="text-decoration-line-through text-black-50">
                <CheckStyle className="bi bi-bookmark-x-fill" />
                {v}
              </Bullet>
            </React.Fragment>
          ))}
        </>
      )}
    </>
  );
};

const ItemArrayB = ({ text }) => {
  return (
    <>
      {_.isArray(text) && (
        <>
          {text.map((v, i) => (
            <React.Fragment key={i}>
              <BulletB className="text-white">
                <CheckStyle className="bi bi-bookmark-check-fill" />
                {v}
              </BulletB>
            </React.Fragment>
          ))}
        </>
      )}
    </>
  );
};

const ItemArrayXB = ({ text }) => {
  return (
    <>
      {_.isArray(text) && (
        <>
          {text.map((v, i) => (
            <React.Fragment key={i}>
              <BulletB className="text-decoration-line-through text-white-50">
                <CheckStyle className="bi bi-bookmark-x-fill" />
                {v}
              </BulletB>
            </React.Fragment>
          ))}
        </>
      )}
    </>
  );
};