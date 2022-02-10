import ContextProvider from "./EmployeeContext";
import "./App.css";
import { RootRoutes } from "./navigation/RootRoutes";
import "antd/dist/antd.css";
import {
  ThemeProvider,
  createGlobalStyle,
} from "./ui/styledComponents/styled-components";
import { theme } from "./ui/styledComponents/theme";

const GlobalStyle = createGlobalStyle`
h1 {
  color: red;
}
`;

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <RootRoutes />
        </ThemeProvider>
      </ContextProvider>
    </div>
  );
}

export default App;
