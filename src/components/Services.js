import styled from "@emotion/styled";
import React from 'react';

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
    background: #E0BD01;
  }
`;
const Services = () => {
  return (
    <>
      <div className="container text-center">
        <div className="section-title">
          <div className="section-h2">Services</div>
          <div className="section-p">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 p-3">
            <div className="icon">
              <i className="bi bi-briefcase"></i>
            </div>
            <Title className="mb-3 pb-2">Lorem Ipsum</Title>
            <div className="">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident
            </div>
          </div>
          <div className="col-md-6 col-lg-4 p-3">
            <div className="icon">
              <i className="bi bi-briefcase"></i>
            </div>
            <Title className="mb-3 pb-2">Lorem Ipsum</Title>
            <div className="">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident
            </div>
          </div>
          <div className="col-md-6 col-lg-4 p-3">
            <div className="icon">
              <i className="bi bi-briefcase"></i>
            </div>
            <Title className="mb-3 pb-2">Lorem Ipsum</Title>
            <div className="">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident
            </div>
          </div>
          <div className="col-md-6 col-lg-4 p-3">
            <div className="icon">
              <i className="bi bi-briefcase"></i>
            </div>
            <Title className="mb-3 pb-2">Lorem Ipsum</Title>
            <div className="">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident
            </div>
          </div>
          <div className="col-md-6 col-lg-4 p-3">
            <div className="icon">
              <i className="bi bi-briefcase"></i>
            </div>
            <Title className="mb-3 pb-2">Lorem Ipsum</Title>
            <div className="">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident
            </div>
          </div>
          <div className="col-md-6 col-lg-4 p-3">
            <div className="icon">
              <i className="bi bi-briefcase"></i>
            </div>
            <Title className="mb-3 pb-2">Lorem Ipsum</Title>
            <div className="">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Services;
