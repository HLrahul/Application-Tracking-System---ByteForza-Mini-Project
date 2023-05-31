import styled from "styled-components";

export const P = styled.p`
  height: 10svh;
  width: 100%;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: small;
  letter-spacing: 1px;
  padding: 0px 35px;

  @media (max-width: 768px) {
    font-size: x-small;
  }
`;