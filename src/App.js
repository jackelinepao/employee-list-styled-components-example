import ContextProvider from "./EmployeeContext";
import "./App.css";
import { RootRoutes } from "./navigation/RootRoutes";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <RootRoutes />
      </ContextProvider>
    </div>
  );
}

export default App;
