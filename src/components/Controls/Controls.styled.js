import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 4rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  
  gap: 1rem;
`;

export const Button = styled.div`
  padding: 0 2rem 0 2rem;
  
  border-radius: 2rem;
  padding: 1rem;
  width: 7rem;
  height: 7rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;


  background-color: dimgray;
    -webkit-transition:  all 0.3s;
    -o-transition:  all 0.3s;
    transition:  all 0.3s;
  -webkit-box-shadow: inset 0 0 2px 1px rgba(255,255,255,0.5);
          box-shadow: inset 0 0 2px 1px rgba(255,255,255,0.5);


    &:hover {
        background-color: #363636;
  -webkit-box-shadow: inset 0 0 2px 1px rgba(255,255,255,0.3);
          box-shadow: inset 0 0 2px 1px rgba(255,255,255,0.3);
    }

    &:active {
        -webkit-box-shadow: inset 0px 0px 3px 2px rgba(255,255,255,0.3);
          box-shadow: inset 0px 0px 3px 2px rgba(255,255,255,0.3);
    }

`;