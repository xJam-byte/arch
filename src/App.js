import { Route, Routes, useLocation } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Okna from "./pages/Okna";
import Doors from "./pages/Doors";
import Vitrges from "./pages/Vitrges";

import "./App.css";
import AdminPanel from "./pages/AdminPanel";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/AdminPanel" || <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Okna" element={<Okna />} />
          <Route path="/Dveri" element={<Doors />} />
          <Route path="/Vitrages" element={<Vitrges />} />
          <Route path="/AdminPanel" element={<AdminPanel />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
