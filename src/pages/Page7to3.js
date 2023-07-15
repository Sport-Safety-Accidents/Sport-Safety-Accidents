import React, { useState } from "react";
import Component from "../assets/Cotainter";

const Page7to3 = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  return (
    <Component title={"골절"}>
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
          뼈가 부러진 것으로, 골절 부위 부종과 심한 통증이 있으며, 골절부위가
          변형되어 정상 기능이 불가능한다.
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
          골절부위를 부목으로 고정하고, 응급처치를 한 뒤 병원으로 이동해 의사의
          치료를 받도록 한다.
        </div>
      </div>
    </Component>
  );
};

export default Page7to3;
