import React from "react";
import Header from "./Header";

const Container = ({ title, children }) => {
  return (
    <div>
      <Header title={title} />
      <div className="flex flex-col w-full p-2">{children}</div>
    </div>
  );
};

export default Container;
