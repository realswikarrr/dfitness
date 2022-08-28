import React, { ReactNode } from "react";
import NavBar from "../navbar";
import Slider from "../slider";

type Props = {
  children: ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <Slider />
      <div className="lg:max-w-[821px] max-w-[420px] mx-auto mt-5 w-full ">
        {children}
      </div>
    </>
  );
};

export default Main;
