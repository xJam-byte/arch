import { Route, Routes } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Okna from "./pages/Okna";
import Doors from "./pages/Doors";
import Vitrges from "./pages/Vitrges";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Okna" element={<Okna />} />
          <Route path="/Dveri" element={<Doors />} />
          <Route path="/Vitrages" element={<Vitrges />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
