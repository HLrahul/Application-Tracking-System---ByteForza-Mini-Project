import { useNavigate } from "react-router-dom";
import { HomeWrapper, Branding, Title, SubTitle, ButtonsSection } from "../styles/Home.styles";
import { Button } from "../styles/Common.styles";

function Home() {

  const navigate = useNavigate();

  return (
    <HomeWrapper>
      <Branding>
        <Title>Track - Now</Title>
        <SubTitle>
          Tracking applications made efficient!
        </SubTitle>
      </Branding>

      <ButtonsSection>
        <Button onClick={e => { e.preventDefault(); navigate("/candidates"); }} >Candidates</Button>
        <Button onClick={e => { e.preventDefault(); navigate("/interview"); }} >Reviews</Button>
        <Button onClick={e => { e.preventDefault(); navigate("/reports"); }} >Reports</Button>
      </ButtonsSection>
    </HomeWrapper>
  )

}

export default Home;