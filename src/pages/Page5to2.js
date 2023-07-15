import React, { useState } from "react";
import Component from "../assets/Cotainter";

const Page5to2 = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  return (
    <Component title={"근육 경련"}>
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
          비자발적인 강한 근육 수축과 통증 동반
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
          스트레칭을 충분히 하고 물과 이온 음료 섭취
        </div>
      </div>
    </Component>
  );
};

export default Page5to2;
