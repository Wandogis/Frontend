import MainHeader from "../components/main-header";
import theme from "../assets/theme";
// import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const Main: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <MainHeader />
      </div>
    </ThemeProvider>
  );
};
export default Main;
