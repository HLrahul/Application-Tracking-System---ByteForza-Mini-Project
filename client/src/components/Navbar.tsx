import { useState } from "react";
import { NavContainer, TitleContainer, A, Title, SubTitle, NavLinks, Ul, Li, Options, Span } from "../styles/Navbar.styles";

function Navbar() {

  const [optionsActive, setOptionsActive] = useState(false);

  function toggleOptions() {
    setOptionsActive(!optionsActive);
  }

  return (
    <>
      <NavContainer>
        <TitleContainer>
          <A to="/">
            <Title>Track-Now</Title>
            <SubTitle>Track your application!</SubTitle>
          </A>
        </TitleContainer>

        <NavLinks>
          <Ul className={optionsActive ? "active" : ""}>
            <Li><A to="/candidates">Candidates</A></Li>
            <Li><A to="/interview">Interview Feedback</A></Li>
            <Li><A to="/reports">Reports</A></Li>
          </Ul>
        </NavLinks>

        <Options className={optionsActive ? "active" : ""} onClick={toggleOptions}>
          <Span className="bar"></Span>
          <Span className="bar"></Span>
          <Span className="bar"></Span>
        </Options>
      </NavContainer>
    </>
  )

}

export default Navbar;