import TaskList from "./components/TaskList/TaskList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="Home">
      <Routes>
        <Route path="/" element={<TaskList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
