import { useNavigate } from "react-router-dom";
import { HomeWrapper, Branding, Title, SubTitle, ButtonsSection, Button } from "../styles/Home.styles";

function Home() {

  const navigate = useNavigate();

  return (
    <HomeWrapper>
      <Branding>
        <Title>Track - Now</Title>
        <SubTitle>
          Keep track of your applications and excel in your career.
        </SubTitle>
      </Branding>

      <ButtonsSection>
        <Button type="button" onClick={e => { e.preventDefault(); navigate("/candidates"); }} >Candidates</Button>
        <Button type="button" onClick={e => { e.preventDefault(); navigate("/interview"); }} >Reviews</Button>
        <Button type="button" onClick={e => { e.preventDefault(); navigate("/reports"); }} >Reports</Button>
      </ButtonsSection>
    </HomeWrapper>
  )

}

export default Home;