import React, { ReactNode } from "react";
import NavBar from "../navbar";

type Props = {
  children: ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <div className="lg:max-w-[821px] max-w-[420px] mx-auto mt-5 w-full ">
        {children}
      </div>
    </>
  );
};

export default Main;
