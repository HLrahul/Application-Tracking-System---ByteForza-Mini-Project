import styled from "styled-components";

export const AddCandidateWrapper = styled.section`
  min-height: 85svh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0px;
`;

export const Form = styled.form`
  border: 1px solid black;
  padding: 2.5rem;
  display: flex;
  gap: 4rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const InputPair = styled.div`
  padding: 15px 0px;
`;

export const P = styled.p`
  font-weight: bolder;

  &.add-candidate-title {
    font-size: 2rem;
  }

  &.notes-text-area {
    height: 4rem;
  }
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

export const Label = styled.label`
  padding-left: 0;
  padding-right: 10px;
  display: flex;
`;

export const Section = styled.section`
  margin-top: 10px;
  padding: 5px 10px;
  height: fit-content;
  width: 16rem;
  display: flex;
  flex-direction: column;
  background: transparent;
  border: 1px solid black;
  border-radius: 10px;
  outline: none;
`;

export const CommonSkillsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const SkillLabel = styled.section`
  padding-left: 5px;
`;

export const Left = styled.div``;

export const Center = styled.section``;

export const Right = styled.div``;

export const Corner = styled.div``;