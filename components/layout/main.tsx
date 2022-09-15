import React, { ReactNode } from "react";
import Footer from "../footer";
import NavBar from "../navbar";

type Props = {
  children: ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Main;
