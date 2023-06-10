import styled from 'styled-components';

export const P = styled.p`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 900;
  font-size: 2rem;

  &.table-text {
    font-size: 1rem;
  }
`;

export const ReportsWrapper = styled.section`
  min-height: 87.5svh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

export const Table = styled.table`
  color: black;
  font-size: 0.85rem;
  width: 50%;
  border-collapse: collapse;

  @media (max-width: 768px) {
    margin-top: 2rem;
    display: block;
  }
`;

export const Tbody = styled.tbody`
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
    text-align: left;
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