import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Main, NotFound, Loading, innerlv1_4, innerlv1_5, innerlv1_7, innerlv1_8 } from "./pages/index.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={ <Main />}></Route>
          <Route path="/loading" element={<Loading />}></Route>
          <Route path="/4" element={<innerlv1_4 />}></Route>
          <Route path="/5" element={<innerlv1_5 />}></Route>
          <Route path="/7" element={<innerlv1_7 />}></Route>
          <Route path="/8" element={<innerlv1_8 />}></Route>
          
          {/* 엘리먼트의 상단에 위치하는 라우트들의 규칙을 모두 확인하고, 일치하는 라우트가 없다면 이 라우트가 화면에 나타나게 됩니다. */}
          <Route path="*" element={<NotFound />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
