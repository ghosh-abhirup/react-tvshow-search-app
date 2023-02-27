import "./App.css";
import Home from "./components/Home";
import SingleSeries from "./components/SingleSeries";
import Error from "./components/Error";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series/:id" element={<SingleSeries />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
