import styled from "styled-components";

export const Wrapper = styled.div``;

export const Slider = styled.input`
  /* Variables */
  --thumb-background: linear-gradient(
    90deg,
    #101010 0%,
    #101010 45%,
    #cccccc 45%,
    #cccccc 55%,
    #101010 55%,
    #101010 100%
  );
  --thumb-border: 1px solid dimgray;
  --thumb-height: 36px;
  --thumb-width: 16px;
  --thumb-border-radius: 3px;

  /* Styles */
  /* https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/ */
  transform: rotate(-90deg);
  -webkit-appearance: none; /* Blank Slate Style */
  width: 10rem; /* Blank Slate Style */
  /* height: 100%; */
  background: transparent; /* Blank Slate Style */

  &::-ms-track {
    width: 100%; /* Blank Slate Style */
    cursor: pointer; /* Blank Slate Style */
    background: transparent; /* Blank Slate Style */
    border-color: transparent; /* Blank Slate Style */
    color: transparent; /* Blank Slate Style */
  }

  &:focus {
    outline: none; /* Blank Slate Style */
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Blank Slate Style */
    border: 1px solid dimgray;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: linear-gradient(
      90deg,
      #101010 0%,
      #101010 45%,
      #cccccc 45%,
      #cccccc 55%,
      #101010 55%,
      #101010 100%
    );
    cursor: pointer;
    margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
  }

  &::-moz-range-thumb {
    border: 1px solid dimgray;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: linear-gradient(
      90deg,
      #101010 0%,
      #101010 45%,
      #cccccc 45%,
      #cccccc 55%,
      #101010 55%,
      #101010 100%
    );
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
  }

  &::-ms-thumb {
    border: 1px solid dimgray;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: linear-gradient(
      90deg,
      #101010 0%,
      #101010 45%,
      #cccccc 45%,
      #cccccc 55%,
      #101010 55%,
      #101010 100%
    );
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }

  &:focus::-webkit-slider-runnable-track {
    background: #367ebd;
  }

  &::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }

  &::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border-width: 16px 0;
    color: transparent;
  }

  &::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }

  &:focus::-ms-fill-lower {
    background: #3071a9;
  }

  &::-ms-fill-upper {
    background: #3071a9;
  }
  &:focus::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }

  &:focus::-ms-fill-upper {
    background: #367ebd;
  }
`;
