import styled from "styled-components";

export const P = styled.p``;

export const EditCandidateWrapper = styled.div`
  min-height: 87.5svh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const EditForm = styled.form`
  border: 1px solid black;
  padding: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const InputPair = styled.div`
  padding: 15px 0px;
`;

export const Input = styled.input`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: none;
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: white !important;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  outline: none;
  border: none;
  width: 16rem;
  border-bottom: 1px solid black;
  padding: 5px 0px;
  background: transparent;

  &.check-box {
    width: auto;
  }
`;

export const Select = styled.select``;
export const Option = styled.option``;

export const Left = styled.div``;
export const Center = styled.div``;
export const Right = styled.div``;
