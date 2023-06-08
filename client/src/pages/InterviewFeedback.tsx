import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import axios, { BASE_URL } from '../api/axios';

import { P, InterviewFeedbackWrapper, CandidatesList, Tbody, Tr, Th, Td } from '../styles/InterviewFeedback.styles';
import { Button } from '../styles/Common.styles';

function InterviewFeedback() {

  const loadRef = useRef(false);

  const [candidatesList, setCandidatesList] = useState([]);

  const getCandidates = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setCandidatesList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!loadRef.current) {
      loadRef.current = true;
      getCandidates();
    }
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <InterviewFeedbackWrapper>

        {
          candidatesList.length != 0
            ? (
              <CandidatesList>
                <Tbody>

                  <Tr className='headRow'>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Candidate Status</Th>
                    <Th>Edit</Th>
                  </Tr>

                  {
                    candidatesList.map((candidate, index) => {
                      return (
                        <Tr key={index}>
                          <Td data-label='Name'>{candidate['name']}</Td>
                          <Td data-label='Email'>{candidate['email']}</Td>
                          <Td data-label='Candidate Status'>{candidate['candidate_status']}</Td>
                          <Td data-label='Edit'>
                            <Button className="candidate-edit-btn" onClick={e => { e.preventDefault(); navigate(`/candidate-feedback/${candidate['id']}`) }} >Edit</Button>
                          </Td>
                        </Tr>
                      )
                    })
                  }

                </Tbody>
              </CandidatesList>
            )
            : (
              <P>No Candidates added yet!</P>
            )
        }

      </InterviewFeedbackWrapper>
    </>
  )

}

export default InterviewFeedback;