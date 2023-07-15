import React, { useState } from "react";
import Component from "../assets/Cotainter";

const Page6 = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  return (
    <Component title={"옆구리 통증"}>
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
        <div className={first ? "block" : "hidden"}>옆구리에 통증을 느낌</div>
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
          통증이 가볍다면 운동 강도를 줄이고, 통증이 심한 경우에는 운동 중지,
          수분을 섭취하여 충분한 휴식을 취한다.
        </div>
      </div>
    </Component>
  );
};

export default Page6;
