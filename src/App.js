import TaskList from './components/TaskList'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<TaskList/>}/>
    </Routes>
    
  );
}

export default App;
