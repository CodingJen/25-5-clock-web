import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  left: 3rem;
  top: 3rem;
  width: 44rem;
  height: 21rem;
  background-color: gray;
  -webkit-box-shadow: 0 0 5px 3px rgba(255,255,255,0.4);
          box-shadow: 0 0 5px 3px rgba(255,255,255,0.4);
  border-top-left-radius:54% 102%;
  border-top-right-radius: 54% 102%;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
/*   padding-top: 1rem; */
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  gap: 2rem;
`;

export const Label = styled.div`
    font-size: 3rem;
`;

export const Countdown = styled.div`
    font-size: 8rem;
`;