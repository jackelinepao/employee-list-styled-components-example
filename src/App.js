import ContextProvider from "./employeeContext";
import { Form } from "./Form";
import { List } from "./List";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <nav>
            <Link to="/add-employee">Add Employee</Link> |{" "}
            <Link to="/employee-list">Employee List</Link>
          </nav>
          <Routes>
            <Route path="/add-employee" element={<Form />} />
            <Route path="/employee-list" element={<List />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
