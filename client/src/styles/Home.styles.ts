import styled from 'styled-components';

export const HomeWrapper = styled.section`
  min-height: 100svh;
  width: 100%;
  padding: 0px 35px;
  display: flex;
  flex-direction: column;
  margin-top: -6rem;
  justify-content: center;
`;

export const Branding = styled.div``;

export const Title = styled.p`
  font-size: 5rem;
  font-weight: 900;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  width: fit-content;
  padding: 0px 10px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
export const SubTitle = styled.p`
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  padding: 0px 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonsSection = styled.section`
  height: 5rem;
  width: 22.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px;
`;