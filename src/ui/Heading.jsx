/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";

// const test = `text-align: center`;

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color:yellow"}
// `;

// const Heading = styled.h1`
//   font-size: 30px;
//   font-weight: 600;
//   ${test}
// `;

// ${props =>
//   props.type === "h1" &&
//   css`
//     font-size: 3rem;
//     font-weight: 600;
//   `}

const Heading = styled.h1`
  ${props =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${props =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  ${props =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

    line-height: 1.4;

  ${props =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}

  line-height: 1.4;
`;

export default Heading;
