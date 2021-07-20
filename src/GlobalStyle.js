import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


:root {
  
}

html {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-family: system-ui, sans-serif;
  font-size: 10px;
  text-shadow: 1px 1px rgba(0,0,0,0.5);
}
@media only screen and (max-width: 550px) {
  html {
    font-size: 8px;    
  }
}
@media only screen and (max-height: 550px) {
  html {
    font-size: 8px;    
  }
}

@media only screen and (max-width: 450px) {
  html {
    font-size: 7px;    
  }
}
@media only screen and (max-height: 450px) {
  html {
    font-size: 7px;    
  }
}

*, *::before, *::after {
  margin:0;
  padding:0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

body {
  background: hsla(0, 66%, 66%, 1);
  color: white;
  background-image: -o-linear-gradient(30deg, sienna, peachpuff);
  background-image: linear-gradient(60deg, sienna, peachpuff)
}

#root {
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 1rem;
}

#break-label {
  grid-area: break-label;
  -ms-grid-column-align: end;
      justify-self: end;
}
#break-setting {grid-area: break-setting;}
#break-up {grid-area: break-up;}
#break-down {grid-area: break-down;}
#session-label {
  grid-area: session-label;
  -ms-grid-column-align: end;
      justify-self: end;
}
#session-setting {grid-area: session-setting;}
#session-up {grid-area: session-up;}
#session-down {grid-area: session-down;}
.volume-control { grid-area: volume;}




`;
