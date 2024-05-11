import styled from "@emotion/styled";
import React from "react";
import _ from "lodash";
const Title = styled.div`
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 18px;
  position: relative;
  padding-bottom: 15px;
  ::after {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 2px;
    bottom: 0px;
    left: calc(50% - 25px);
    background: #e0bd01;
  }
`;
const Services = () => {
  return (
    <>
      <div className="container text-center">
        <div className="section-title">
          <div className="section-h2">Services</div>
          <div className="section-p">
            Transform your vehicle with our meticulous car detailing services,
            offering Power polish, Wax, Odor Removal and more.
            and ceramic coating applications for a pristine finish
          </div>
        </div>
        <div className="row">
          <ServicesArray
            title={["Decal Removal"]}
            text={[
              "Decal removal involves the process of safely taking off stickers or decals from surfaces without causing damage.",
            ]}
            price={["$20"]}
          />
          <ServicesArray
            title={["Headlight Restoration"]}
            text={[
              "Foggy or yellowed headlights can be restored to their original clarity and brightness, improving visibility and appearance.",
            ]}
            price={["$99"]}
          />

          <ServicesArray
            title={["Odor Removal"]}
            text={[
              "Effective odor removal service to eliminate unwanted smells and refresh your space.",
            ]}
            price={["$50"]}
          />
          <ServicesArray
            title={["Toddler Seat Clean"]}
            text={[
              "We provide a professional cleaning experience for child car seats, ensuring safety and hygiene for young passengers.",
            ]}
            price={["$20"]}
          />
          <ServicesArray
            title={["Premium Wax"]}
            text={[
              "A high-quality, professional-grade wax with excellent shine and protection.",
            ]}
            price={["$$$"]}
          />
          <ServicesArray
            title={["Power Polish"]}
            text={[
              "Polishing can remove or disguise scratches, water spots, swirls, stone chips, and other minor damages to your car's paint work.",
            ]}
            price={["$$$"]}
          />
        </div>
      </div>
    </>
  );
};

export default Services;

const ServicesArray = ({ text, title, price }) => {
  return (
    <>
      {_.isArray(text) && (
        <>
          {text.map((v, i) => {
            return (
              <React.Fragment key={i}>
                <div className="col-md-6 col-lg-4 p-3">
                  <div className="icon">{price}</div>
                  <Title className="mb-3 pb-2">{title}</Title>
                  <div className="">{v}</div>
                </div>
              </React.Fragment>
            );
          })}
        </>
      )}
    </>
  );
};
