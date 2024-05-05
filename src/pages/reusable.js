import styled from "@emotion/styled";
import React, { useState } from "react";
import { Collapse, CardBody } from "reactstrap"; // Import Bootstrap components

const ReusableComponents = () => {
  return (
    <>
      <section style={{ paddingBottom: "400px" }}>
        <Services />
      </section>
      <section style={{ paddingBottom: "400px" }}>
        <WhyUs />
      </section>
      <section className="section-bg" style={{ paddingBottom: "400px" }}>
        <Faq />
      </section>
      <section className="section-bg" style={{ paddingBottom: "400px" }}>
        <Resume />
      </section>
    </>
  );
};

export const Resume = () => {
  return (
    <div className="container">
      <div className="py-5">
        <div className="resume-header">Resume</div>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="resume-title">Summary</div>
          <div className="resume-item pb-0">
            <div className="Resume-h">Alice Barkley</div>
            <div>
              <em>
                Innovative and deadline-driven Graphic Designer with 3+ years of
                experience designing and developing user-centered digital/print
                marketing material from initial concept to final, polished
                deliverable.
              </em>
            </div>
            <ul>
              <li>Portland par 127,Orlando, FL</li>
              <li>(123) 456-7891</li>
              <li>alice.barkley@example.com</li>
            </ul>
          </div>
          <div className="resume-title">Education</div>

          <div className="resume-item">
            <div className="resume-h">Master of Fine Arts & Graphic Design</div>
            <div className="resume-h5">2015-2016</div>
            <p className="resume-location">
              <em>Rochester Institute of Technology, Rochester, NY</em>
            </p>
            <p>
              Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam
              iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti
              nerada porti sand markend
            </p>
          </div>
          <div className="resume-item">
            <div className="resume-h">
              Bachelor of Fine Arts & Graphic Design
            </div>
            <div className="resume-h5">2010-2014</div>
            <p className="resume-location">
              <em>Rochester Institute of Technology, Rochester, NY</em>
            </p>
            <p>
              Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam
              iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti
              nerada porti sand markend
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="resume-title">Professional Experience</div>

          <div className="resume-item">
            <div className="resume-h">Senior graphic design specialist</div>
            <div className="resume-h5">2019-present</div>
            <p className="resume-location">
              <em>Experion, New York, NY</em>
            </p>
            <ul>
              <li className="pb-2">
                Lead in the design, development, and implementation of the
                graphic, layout, and production communication materials
              </li>
              <li className="pb-2">
                Delegate tasks to the 7 members of the design team and provide
                counsel on all aspects of the project.
              </li>
              <li className="pb-2">
                Oversee the efficient use of production project budgets ranging
                from $2,000 - $25,000
              </li>
              <li className="pb-2">
                Supervise the assessment of all graphic materials in order to
                ensure quality and accuracy of the design
              </li>
            </ul>
          </div>
          <div className="resume-item">
            <div className="resume-h">Senior graphic design specialist</div>
            <div className="resume-h5">2019-present</div>
            <p className="resume-location">
              <em>Experion, New York, NY</em>
            </p>
            <ul>
              <li className="pb-2">
                Lead in the design, development, and implementation of the
                graphic, layout, and production communication materials
              </li>
              <li className="pb-2">
                Delegate tasks to the 7 members of the design team and provide
                counsel on all aspects of the project.
              </li>
              <li className="pb-2">
                Oversee the efficient use of production project budgets ranging
                from $2,000 - $25,000
              </li>
              <li className="pb-2">
                Supervise the assessment of all graphic materials in order to
                ensure quality and accuracy of the design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  // State to manage which FAQ items are open
  const [openItems, setOpenItems] = useState([]);

  // Function to toggle FAQ item
  const toggleItem = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const faqData = [
    {
      question: "Non consectetur a erat nam at lectus urna duis?",
      answer:
        "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      question: "Dolor sit amet consectetur adipiscing elit?",
      answer:
        "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      question: "Feugiat scelerisque varius morbi enim nunc?",
      answer:
        "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      question:
        "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
      answer:
        "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      question:
        "Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?",
      answer:
        "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="section-title">
          <div className="section-h2">FREQUENTLY ASKED QUESTIONS</div>
          <div className="section-p">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </div>
        </div>
        <ul className="faq-list">
          {faqData.map((item, index) => (
            <li key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleItem(index)}>
              <i className="bi bi-question-circle icon-help" />
                <span>{item.question}</span>
                
                <i
                  className={`bi bi-chevron-${
                    openItems.includes(index) ? "up" : "down"
                  }`}
                />
              </div>
              <Collapse isOpen={openItems.includes(index)}>
                <CardBody>{item.answer}</CardBody>
              </Collapse>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const WhyUs = () => {
  return (
    <>
      <div className="container">
        <div className="section-title">
          <div className="section-h2">Why Us</div>
          <div className="section-p">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="box">
              <span>01</span>
              <div className="box-title">Lorem Ipsum</div>
              <div className="box-p">
                Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
                consectetur ducimus vero placeat
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box">
              <span>02</span>
              <div className="box-title">Repellat Nihil</div>
              <div className="box-p">
                Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
                consectetur ducimus vero placeat
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box">
              <span>03</span>
              <div className="box-title">Ad ad velit qui</div>
              <div className="box-p">
                Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
                consectetur ducimus vero placeat
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

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
    background: rgb(92, 159, 36);
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

export default ReusableComponents;
