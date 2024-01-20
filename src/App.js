import logo from "./logo.svg";
import "./App.css";
import SideDrawer from "./component/Drawer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FirstPage from "./pages/FirstPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideDrawer />
        <Routes>
          <Route path="/first-page" element={<FirstPage />} />
          <Route path="/" element={<h1>hi</h1>} />

          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
