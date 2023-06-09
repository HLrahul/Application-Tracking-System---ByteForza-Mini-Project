import styled from "styled-components";

export const P = styled.p`
  min-height: 87.5svh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CandidateFeedbackWrapper = styled.div`
  min-height: 87.5svh;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 2rem;
`;

export const Message = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const CandidateInfo = styled.section` 
  width: 100%;
`;

export const Table = styled.table`
  color: black;
  font-size: 0.85rem;
  width: 100%;
  border-collapse: collapse;

  @media (max-width: 768px) {
    margin-top: 2rem;
    display: block;
  }
`;

export const Tbody = styled.tbody`
  /* & Th {
    top: 12.5svh;
    position: sticky;
  } */

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Tr = styled.tr`
  @media (max-width: 768px) {
    display: block;
    margin-bottom: 25px;
    border: 1px solid gray;

    &.headRow {
      display: none;
    }
  }
`;

export const Th = styled.th`
  color: white;
  border: 1px solid black;
  background: black;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 12px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Td = styled.td`
  border: 1px solid black;
  padding: 10px;
  text-align: center;
  transition: 0.3s ease;

  @media (max-width: 768px) {
    color: black;
    display: block;
    text-align: right;
    position: relative;
    padding-left: 10%;

    &::before {
      content: attr(data-label);
      color: grey;
      position: absolute;
      left: 0;
      width: 50%;
      font-weight: 900;
      text-align: left;
      padding-left: 10px;
    }
  }
`;

export const FeedbackSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const InterviewerFeedback = styled.section`
  width: 100%;
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
    margin-left: 0;
  }

  outline: none;
  border: none;
  width: 2rem;
  border-bottom: 1px solid black;
  padding: 5px 0px;
  background: transparent;
  text-align: center;

  &.comments-field {
    width: 10rem;
  }
`;

export const Select = styled.select``;
export const Option = styled.option``;