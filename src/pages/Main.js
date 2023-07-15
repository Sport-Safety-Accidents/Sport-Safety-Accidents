import React from "react";

const Main = () => {
  return (
    <div>
      <div className="header py-4 px-6 flex items-center justify-center">
        <div className="flex items-center">
          <div className="text-white font-semibold" id="header-title">
            스포츠 안전사고의 대처활동
          </div>
        </div>
        <div></div>
      </div>

      <div className="itemList">
        <a href="/1" className="itemList-item ">
          <img src="./main_1.png" className="itemList-item-img"></img>
          <p className="listItem-title">심폐소생술</p>
        </a>

        <a href="/2" className="itemList-item ">
          <img src="./main_2.jpg" className="itemList-item-img"></img>
          <p className="listItem-title">자동 심장 충격기 사용법</p>
        </a>

        <a href="/3" className="itemList-item ">
          <img src="./main_3.png" className="itemList-item-img"></img>
          <p className="listItem-title">일반 상해</p>
        </a>

        <a href="/4" className="itemList-item ">
          <img src="./main_4.png" className="itemList-item-img"></img>
          <p className="listItem-title">일사병 / 열사병</p>
        </a>

        <a href="/5" className="itemList-item ">
          <img src="./main_5.png" className="itemList-item-img"></img>
          <p className="listItem-title">근육통 / 근육 경련 /근파열</p>
        </a>

        <a href="/6" className="itemList-item ">
          <img src="./main_6.png" className="itemList-item-img"></img>
          <p className="listItem-title">옆구리 통증</p>
        </a>

        <a href="/7" className="itemList-item ">
          <img src="./main_7.png" className="itemList-item-img"></img>
          <p className="listItem-title">탈구/염좌/골절</p>
        </a>

        <a href="/8" className="itemList-item ">
          <img src="./main_8.png" className="itemList-item-img"></img>
          <p className="listItem-title">찰과상 / 출혈</p>
        </a>
      </div>
    </div>
  );
};

export default Main;
