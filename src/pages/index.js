import AppNavBar  from "../components/Navbar";
import * as React from "react";

const IndexPage = () => {
  return (
    <>
      <section>
        <AppNavBar />
      </section>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
