import React, { ReactNode } from "react";
import NavBar from "../navbar";

type Props = {
  children: ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default Main;
