import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Computer from "./Computer";
import Phone from "./Phone";
import MainHeader from "./MainHeader";
import Footer from "./Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element={<Home />} />
            <Route path="computer" element={<Computer />} />
            <Route path="phone" element={<Phone />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
