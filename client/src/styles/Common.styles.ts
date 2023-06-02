import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 25px;
  outline: none;
  border: none;
  color: white;
  background: black;
  transition: 0.27s;

  &:hover {
    background: white;
    color: black;
    border: 1px solid black;
  }

  &.add-candidate-btn {
    margin-top: 1rem;
  }
`;