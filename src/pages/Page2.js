import React, { useState } from "react";
import Component from "../assets/Cotainter";

const Page2 = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  return (
    <Component title={"자동 심장 충격기 사용법"}>
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
          1. 전원켜기
        </div>
        <div className={first ? "block" : "hidden"}>
          심폐소생술에 방해가 되지 않는 위치에 놓은 후 전원 단추를 누른다.
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
          2. 두개의 패드 부착
        </div>
        <div className={second ? "block" : "hidden"}>
          패드 하나는 오른쪽 빗장뼈 아래에 부착. 또 다른 하나는 왼쪽 젖꼭지
          아래의 겨드랑이 중앙선에 부착
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
          3 . 심장 리듬 분석
        </div>
        <div className={third ? "block" : "hidden"}>
          “분석중”이라는 지시가 나오면 환자에게서 손을 뗀다.
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
          4. 자동 심장 충격 시행
        </div>
        <div className={fourth ? "block" : "hidden"}>
          깜빡이는 단추를 눌러 심장 충격을 시행한다. 심장 충격 단추를 누르기
          전에는 반드시 다른사람이 환자에게서 떨어져 있는지 확인한다.
        </div>
      </div>
      <div
        className="py-1 itemList-item"
        onMouseOver={() => setFifth(true)}
        onMouseLeave={() => setFifth(false)}
      >
        <div
          className={
            "font-semibold text-lg py-1 center " + (fifth ? "hidden" : "block")
          }
        >
          5. 즉시 심폐소생술 실시
        </div>
        <div className={fifth ? "block" : "hidden"}>
          심장 충격 실시 뒤 즉시 가슴압박30회와 인공호흡 2회를 시작한다.
        </div>
      </div>
    </Component>
  );
};

export default Page2;
