import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  }
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Bellefair&display=swap');
body {
    height: 100vh;
    width: 100vw;
    /* font-family: 'Barlow Condensed', sans-serif;
    font-family: 'Bellefair', serif; */
}
`;

export {GlobalStyles};