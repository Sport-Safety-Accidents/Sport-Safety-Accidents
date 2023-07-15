import React, { useState } from "react";
import Component from "../assets/Cotainter";

const Page4to1 = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  return (
    <Component title={"일사병"}>
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
          현기증, 두통, 식욕부진, 창백한 얼굴
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
          시원한 그늘로 옮겨 옷을 느슨하게 풀어주고, 수분 공급
        </div>
      </div>
    </Component>
  );
};

export default Page4to1;
