import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import TopNav from "./components/TopNav";
import CovidDataPage from "./pages/CovidData/CovidDataPage";

function App() {
  return (
    <>
      <TopNav />

      <Routes>
        <Route path="/" element={<CovidDataPage />} />
        <Route path="/vaccine" element={<div>I am vaccine page</div>} />
        <Route path="/news" element={<div>I am news page</div>} />
      </Routes>
    </>
  );
}

export default App;
