import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import TopNav from "./components/TopNav";
import { CovidDataPage } from "./pages/CovidData/CovidDataPage";
import NewPage from "./pages/News/NewPage";

function App() {
  return (
    <>
      <TopNav />

      <Routes>
        <Route path="/" element={<CovidDataPage />} />
        <Route path="/vaccine" element={<div>I am vaccine page</div>} />
        <Route path="/news" element={<NewPage />} />
      </Routes>
    </>
  );
}

export default App;
