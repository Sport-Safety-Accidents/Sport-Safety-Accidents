import React, { useState } from "react";
import Component from "../assets/Cotainter";

const Page3 = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  return (
    <Component title={"일반 상해"}>
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
          휴식
        </div>
        <div className={first ? "block" : "hidden"}>
          상해가 더 진행되지 않도록 한다. 방법 : 부상 부위의 사용을 멈춘다.
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
          냉찜질
        </div>
        <div className={second ? "block" : "hidden"}>
          증각적인 냉각은 손상된 혈관을 숭축, 내출혈을 막아준다, 방법 :
          아이스팩은 피부에 직접 닿지 않게 천을 사용한다. 부상 후 3일간 한시간에
          1번 10~20분이 넘지 않도록 실시한다.
        </div>
      </div>
      <div
        className="py-1 itemList-item"
        onMouseOver={() => setThird(true)}
        onMouseLeave={() => setThird(false)}
      >
        <div
          className={
            "font-semibold text-lg py-1 center " + (third ? "hidden" : "block")
          }
        >
          압박
        </div>
        <div className={third ? "block" : "hidden"}>
          부기를 줄이고 회복 시간을 단축한다 .방법 : 부드러운 붕대, 압박 보호대
          등을 사용한다. 될 수 있는 대로 아이스팩과 함께 부상 부위를 완전히
          감싸야 한다.
        </div>
      </div>
      <div
        className="py-1 itemList-item"
        onMouseOver={() => setFourth(true)}
        onMouseLeave={() => setFourth(false)}
      >
        <div
          className={
            "font-semibold text-lg py-1 center " + (fourth ? "hidden" : "block")
          }
        >
          거상
        </div>
        <div className={fourth ? "block" : "hidden"}>
          부기와 통증을 줄여준다. 방법 : 적당한 물체나 의자를 사용하여 부상
          부위를 심장보다 높은 위치에 둔다.
        </div>
      </div>
    </Component>
  );
};

export default Page3;
