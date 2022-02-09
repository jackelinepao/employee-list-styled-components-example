import { Form } from "../Form";
import { List } from "../List";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function RootRoutes() {
  return (
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
  );
}

export { RootRoutes };
