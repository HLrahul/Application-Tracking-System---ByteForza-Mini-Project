import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { P, CandidateWrapper, CandidatesList } from '../styles/Candidates.styles';
import { Button } from '../styles/Common.styles';

function Candidates() {

  const [candidatesList, setCandidatesList] = useState([]);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/addcandidate");
  }

  return (
    <>
      <CandidateWrapper>
        {
          candidatesList.length != 0
            ? (
              <CandidatesList>

              </CandidatesList>
            )
            : (
              <P>No Candidates Registered Yet!</P>
            )
        }

        <Button onClick={e => { e.preventDefault(); handleClick(); }} > Add Candidate </Button>
      </CandidateWrapper>
    </>
  )

}

export default Candidates;