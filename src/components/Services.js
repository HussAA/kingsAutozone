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
            offering interior & exterior detailing, power polish, and ceramic
            coating applications for a pristine finish.
          </div>
        </div>
        <div className="row">
          <ServicesArray
            title={["Interior Detailing"]}
            text={[
              "Interior detailing involves thorough cleaning and restoring the interior surfaces of a vehicle, including the seats, carpets, dashboard, and other components.",
            ]}
            price={["$20"]}
          />
          <ServicesArray
            title={["Exterior Detailing"]}
            text={[
              "Exterior detailing is thoroughly washing, polishing, and protecting a vehicle's exterior surfaces in order to maintain and improve its appearance.",
            ]}
            price={["$99"]}
          />

          <ServicesArray
            title={["Ceramic Coating"]}
            text={[
              "Ceramic coating is a durable, protective layer applied to surfaces like vehicles or ceramics to enhance gloss and protect against contaminants.",
            ]}
            price={["$50"]}
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
                <div className="col-md-6 col-lg-3 p-3">
                  <div className="icon"><i className="bi bi-cart-plus-fill"/></div>
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
