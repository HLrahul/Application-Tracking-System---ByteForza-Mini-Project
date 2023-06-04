import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { P, CandidateWrapper, CandidatesList, Tbody, Tr, Th, Td } from '../styles/Candidates.styles';
import { Button } from '../styles/Common.styles';

import { BASE_URL } from '../api/axios';
import axios from '../api/axios';

function Candidates() {

  const [candidatesList, setCandidatesList] = useState([]);

  const getCandidates = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setCandidatesList(response.data);
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
                <Tbody>

                  <Tr className='headRow'>
                    <Th>Candidate Name</Th>
                    <Th>Experience {"(Years)"}</Th>
                    <Th>Key Skills</Th>
                    <Th>Notice Period</Th>
                    <Th>CTC</Th>
                    <Th>Exp CTC</Th>
                  </Tr>

                  {
                    candidatesList.map((candidate, index) => {
                      return (
                        <Tr key={index}>
                          <Td data-label="Candidate Name"> {candidate['name']} </Td>
                          <Td data-label="Experience (Years)"> {candidate['experience']} </Td>
                          <Td data-label="Key Skills"> {candidate['skills']} </Td>
                          <Td data-label="Notice Period"> {candidate['notice_period']} </Td>
                          <Td data-label="CTC"> {candidate['ctc']} </Td>
                          <Td data-label="Expected CTC"> {candidate['expected_ctc']} </Td>
                        </Tr>
                      )
                    })
                  }

                </Tbody>
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