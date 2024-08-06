import { createGlobalStyle } from "styled-components";
import { GameShopAPITest } from "./Components/Utils/GameShopAPITest";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: GmarketSansMedium;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <GameShopAPITest />
    </>
  );
}

export default App;
