import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Other from "./pages/Other";
import Param from "./pages/Param";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/other" element={<Other />} />
        <Route path="/param/:first/:second" element={<Param />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
