import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pizza from "./pages/Pizza";
import Header from "./components/Header";
import Four04 from "./components/404";
import Async from "./pages/Async";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/pizza" exact element={<Pizza />} />
            <Route path="/async" element={<Async />} />
            <Route path="/404" element={<Four04 />} />
            <Route path="*" element={<Four04 />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
