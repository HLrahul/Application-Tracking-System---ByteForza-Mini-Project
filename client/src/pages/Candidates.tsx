import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { P, CandidateWrapper, CandidatesList } from '../styles/Candidates.styles';
import { Button } from '../styles/Common.styles';

import { BASE_URL } from '../api/axios';
import axios from '../api/axios';

function Candidates() {

  const [candidatesList, setCandidatesList] = useState([]);

  const getCandidates = async () => {
    try {
      const response = await axios.get(BASE_URL);
      console.log(response);
      setCandidatesList(response?.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCandidates();
  }, []);

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