import React, { useState } from "react";
import Component from "../assets/Cotainter";

const Page5to2 = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  return (
    <Component title={"근파열"}>
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
          근육 일부가 찢어지거나 근막이 파열되는 외상, 심한 통증으로 힘을 줄 수
          없어 부상 부위 동작이 어렵다
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
          RICE 요법을 시행하고, 2~3일간 스트레칭이나 마사지는 절대 하지 않는다.
          회복단계에서 통증이 사라지면, 근육을 따뜻하게 데워주면서 스트레칭
          한다.
        </div>
      </div>
    </Component>
  );
};

export default Page5to2;
