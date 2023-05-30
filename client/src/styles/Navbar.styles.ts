import styled from 'styled-components';

export const NavContainer = styled.div`
  height: 10svh;
  width: 100%;
  background: black;
  padding: 15px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.div``;

export const A = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: white;
  transition: 0.3s ease;

  &:hover{
    color: grey;
  }
`;

export const Title = styled.h1`
  letter-spacing: 2px;
  font-weight: 900;
  text-transform: uppercase;
  font-size: large;
`;
export const SubTitle = styled(Title)`
  font-size: xx-small;
`;

export const NavLinks = styled.div``;

export const Ul = styled.ul`
  display: flex;

  @media (max-width: 768px) {
    position: fixed;
    top: 10svh;
    padding-top: 10px;
    right: -100%;
    height: 25svh;
    gap: 20px;
    flex-direction: column;
    background-color: black;
    width: 100%;
    text-align: center;
    transition: 0.5s;

    &.active {
      right: 0;
    }
  }
`;

export const Li = styled.li`
  list-style-type: none;
  padding: 0px 15px;
`;

export const Options = styled.div`
  margin-left: auto;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;

    &.active .bar:nth-child(2) {
      opacity: 0;
    }
    &.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    &.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`;

export const Span = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;

  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: white;
`;