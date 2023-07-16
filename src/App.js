import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Main,
  NotFound,
  Page1,
  Page2,
  Page3,
  Page4to1,
  Page4to2,
  Page5to1,
  Page5to2,
  Page5to3,
  Page6,
  Page7to1,
  Page7to2,
  Page7to3,
  Page8to1,
  Page8to2,
  Page8to3,
  Loading,
  Innerlv1_4,
  Innerlv1_5,
  Innerlv1_7,
  Innerlv1_8,
} from "./pages/index.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/loading" element={<Loading />}></Route>
          <Route path="/1" element={<Page1 />}></Route>
          <Route path="/2" element={<Page2 />}></Route>
          <Route path="/3" element={<Page3 />}></Route>
          <Route path="/4" element={<Innerlv1_4 />}></Route>
          <Route path="/4-1" element={<Page4to1 />}></Route>
          <Route path="/4-2" element={<Page4to2 />}></Route>
          <Route path="/5" element={<Innerlv1_5 />}></Route>
          <Route path="/5-1" element={<Page5to1 />}></Route>
          <Route path="/5-2" element={<Page5to2 />}></Route>
          <Route path="/5-3" element={<Page5to3 />}></Route>
          <Route path="/6" element={<Page6 />}></Route>
          <Route path="/7" element={<Innerlv1_7 />}></Route>
          <Route path="/7-1" element={<Page7to1 />}></Route>
          <Route path="/7-2" element={<Page7to2 />}></Route>
          <Route path="/7-3" element={<Page7to3 />}></Route>
          <Route path="/8" element={<Innerlv1_8 />}></Route>
          <Route path="/8-1" element={<Page8to1 />}></Route>
          <Route path="/8-2" element={<Page8to2 />}></Route>
          <Route path="/8-3" element={<Page8to3 />}></Route>

          {/* 엘리먼트의 상단에 위치하는 라우트들의 규칙을 모두 확인하고, 일치하는 라우트가 없다면 이 라우트가 화면에 나타나게 됩니다. */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
