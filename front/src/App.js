import AnimatedCursor from "react-animated-cursor";
// import ScrollToTop from "./components/hook/ScrollToTop";
import HeaderContainer from "./components/header/Container";
import BodyContainer from "./components/body/Container";
import FooterContainer from "./components/footer/Container";
import styled from "styled-components";
import "./css/scroll.css";

function App() {
  return (
    <>
      <MainContent>
        {/* <ScrollToTop /> */}
        {/* <HeaderContainer /> */}
        <BodyContainer />
        {/* <FooterContainer /> */}
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="252, 250, 242"
          outerAlpha={0.2}
          innerScale={0.5}
          outerScale={5}
          hasBlendMode={true}
          outerStyle={{
            border: "1.5px solid #EF454A",
            mixBlendMode: "exclusion",
          }}
          innerStyle={{
            backgroundColor: "#D81F35",
          }}
        />
      </MainContent>
    </>
  );
}

export default App;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
`;
