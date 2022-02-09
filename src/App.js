import ContextProvider from "./EmployeeContext";
import "./App.css";
import { MainNavigator } from "./navigation/MainNavigator";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <MainNavigator />
      </ContextProvider>
    </div>
  );
}

export default App;
