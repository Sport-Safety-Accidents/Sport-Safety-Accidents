import React, { useState } from "react";
import Component from "../assets/Cotainter";

const Page7to1 = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  return (
    <Component title={"탈구"}>
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
          물리적인 힘떄문에 관절낭에 뼈가 빠져나와 서로 어긋난 것, 통증이 심하고
          관절부위가 비정상적인 상태로 변함.
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
          환부 고정, 냉찜질, 전문 자격이 있다면 직접 끼워넣는다. 다급한 상황이
          아니라면 정밀 진단 후에 바르게 끼워 맞추는 것이 바람직하다.
        </div>
      </div>
    </Component>
  );
};

export default Page7to1;
