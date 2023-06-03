import { useNavigate } from 'react-router-dom';
import { CandidateWrapper } from '../styles/Candidates.styles';
import { Button } from '../styles/Common.styles';

function Candidates() {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/addcandidate");
  }

  return (
    <>
      <CandidateWrapper>
        {/* <CandidatesList></CandidatesList> */}

        <Button onClick={e => { e.preventDefault(); handleClick(); }} > Add Candidate </Button>
      </CandidateWrapper>
    </>
  )

}

export default Candidates;