import React, { useState } from "react";
import Component from "../assets/Cotainter";

const Page8to2 = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  return (
    <Component title={"출혈"}>
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
          외부 충격으로 피부와 혈관이 손상되어 상처 부위에서 피가 흘러나온다.
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
          가벼운 출혈시 거즈를 대고 손으로 직접 압박하여 지열한다. 심한 출혈에는
          거즈나 수건을 대고 강하게 압박, 그 위를 붕대로 감싼다. 상처 부위를
          심장보다 위로 한다. 압박점을 찾아 혈액의 공급을 차단하고, 지혈이 되지
          않을 경우에는 지혈대를 사용한다.
        </div>
      </div>
    </Component>
  );
};

export default Page8to2;
