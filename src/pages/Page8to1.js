import React, { useState } from "react";
import Component from "../assets/Cotainter";

const Page8to1 = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  return (
    <Component title={"찰과상"}>
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
          넘어지거나 긁히는 등의 마찰에 의해 상처를 입은 것, 통증과 함께 출혈이
          있다.
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
          압박을 통해 지혈하고, 상처를 흐르는 물로 씻어낸다. 상처의 오염정도가
          심하면 소독액을 사용하여 닦아낸다.
        </div>
      </div>
    </Component>
  );
};

export default Page8to1;
