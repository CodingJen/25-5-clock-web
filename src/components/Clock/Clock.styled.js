import styled from "styled-components";

export const Wrapper = styled.main`
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
`;

export const Body = styled.div`
  width: 50rem;
  height: 50rem;
  border-radius: 50%;
  background-color: black;
  -webkit-box-shadow: inset 0 0 5px 2px rgba(255, 255, 255, 0.4);
  box-shadow: inset 0 0 5px 2px rgba(255, 255, 255, 0.4);
`;

export const ControlSection = styled.div`
  width: 46rem;
  height: 23rem;
  top: 4rem;
  left: 2rem;
  position: relative;
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
  /*   gap: 1rem; */

  & > * {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 50%;
    flex: 1 1 50%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
`;

export const ControlGrid = styled.div`
  width: 30rem;
  font-size: 3rem;
  display: -ms-grid;
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  grid-template-areas:
    "break-label   break-setting   break-up   break-down volume"
    "session-label session-setting session-up session-down volume";
`;
