import React, { useState } from "react";
import Component from "../assets/Cotainter";

const Page1 = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  const [sixth, setSixth] = useState(false);
  return (
    <Component title={"심폐소생술"}>
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
          1. 반응확인
        </div>
        <div className={first ? "block" : "hidden"}>
          어깨를 가볍게 두드리며 큰 소리로 “여보세요, 괜찮으세요?” 등 소리친다.
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
          2. 도움 및 119 신고 요청
        </div>
        <div className={second ? "block" : "hidden"}>
          큰 소리로 주변사람에게 도움이나 119 신고를 요청한다. 이때
          자동심장충격기도 함께 요청한다. 도움을 청할 때는 확실한 인상착의로
          주변 사람을 지칭한다.
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
          3 . 가슴악밥 30회 시행
        </div>
        <div className={third ? "block" : "hidden"}>
          깍지를 끼고 가슴 중앙에 양팔을 편 상태에서 체중을 실어 분당 100 ~
          120회의 속도, 5~6cm 깊이로 수직으로 가슴을 압박한다.
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
          4. 인공호흡 2회 실시
        </div>
        <div className={fourth ? "block" : "hidden"}>
          코를 막고 입을 크게 벌려 환자의 입을 완전히 막은 후 가슴이 올라올
          정도로 1초동안 숨을 불어넣는다.
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
          5. 가슴 압박과 인공호흡 실시
        </div>
        <div className={fifth ? "block" : "hidden"}>
          30회의 가슴 압박과 2회의 인공호흡을 반복해서 시행한다.
        </div>
      </div>
      <div
        className="py-1 itemList-item"
        onMouseOver={() => setSixth(true)}
        onMouseLeave={() => setSixth(false)}
      >
        <div
          className={
            "font-semibold text-lg py-1 center " + (sixth ? "hidden" : "block")
          }
        >
          6. 회복자세
        </div>
        <div className={sixth ? "block" : "hidden"}>
          호흡이 회복되었다면, 환자를 옆으로 돌려 눕혀 기도가 막히는 것을
          예방한다.
        </div>
      </div>
    </Component>
  );
};

export default Page1;
