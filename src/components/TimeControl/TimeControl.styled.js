import styled from "styled-components";

export const ControlLabel = styled.label`
  /*   white-space: nowrap; */
  /*   padding: 1rem; */
  /*   text-align: center; */
`;

export const CurrentValue = styled.span`
  text-align: right;
  min-width: 4rem;
`;

export const Arrow = styled.i`
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: dimgray;
  padding: 0.6rem;
  border-radius: 1rem;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  -webkit-box-shadow: inset 0 0 2px 1px rgba(255, 255, 255, 0.5);
  box-shadow: inset 0 0 2px 1px rgba(255, 255, 255, 0.5);

  &:hover {
    background-color: #363636;
    -webkit-box-shadow: inset 0 0 2px 1px rgba(255, 255, 255, 0.3);
    box-shadow: inset 0 0 2px 1px rgba(255, 255, 255, 0.3);
  }

  &:active {
    -webkit-box-shadow: inset 0px 0px 3px 2px rgba(255, 255, 255, 0.3);
    box-shadow: inset 0px 0px 3px 2px rgba(255, 255, 255, 0.3);
  }
`;
