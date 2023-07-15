import React, { useState } from "react";
import Component from "../assets/Cotainter";

const Page5to1 = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  return (
    <Component title={"근육통"}>
      <div
        className="py-1 itemList-item"
        onMouseOver={() => setFirst(true)}
        onMouseLeave={() => setFirst(false)}
      >
        <div
          className={
            "font-semibold text-lg py-1 center " + (first ? "hidden" : "block")
          }
        >
          증상
        </div>
        <div className={first ? "block" : "hidden"}>
          근육의 움직임이 어렵고 통증이 발생한다.
        </div>
      </div>
      <div
        className="py-1 itemList-item"
        onMouseOver={() => setSecond(true)}
        onMouseLeave={() => setSecond(false)}
      >
        <div
          className={
            "font-semibold text-lg py-1 center " + (second ? "hidden" : "block")
          }
        >
          처치법
        </div>
        <div className={second ? "block" : "hidden"}>
          초기에는 냉찜질을 하고, 점차 통증이 줄어들면 온찜질을 한다.
        </div>
      </div>
    </Component>
  );
};

export default Page5to1;
