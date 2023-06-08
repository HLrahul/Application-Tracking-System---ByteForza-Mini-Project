import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import axios, { BASE_URL } from "../api/axios";

import { CandidateFeedbackWrapper, CandidateInfo, Table, Tbody, Th, Tr, FeedbackSection, InterviewerFeedback, Select, Option } from "../styles/CandidateFeedback.styles";
import { Td } from "../styles/Candidates.styles";
import { Button } from "../styles/Common.styles";

function CandidateFeedback() {

  const loadRef = useRef(false);
  const { id } = useParams();

  const [name, setName] = useState();
  const [skills, setSkills] = useState();

  const getCandidate = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);

      setName(response.data?.name);
      setSkills(response.data?.skills);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!loadRef.current) {
      loadRef.current = true;
      getCandidate();
    }
  });

  return (
    <CandidateFeedbackWrapper>

      <CandidateInfo>
        <Table>
          <Tbody>
            <Tr className="headRow">
              <Th>Name</Th>
              <Th>Skills</Th>
            </Tr>

            <Tr>
              <Td data-label='Name'> {name} </Td>
              <Td data-label='Skills'> {skills} </Td>
            </Tr>
          </Tbody>
        </Table>
      </CandidateInfo>

      <FeedbackSection>
        <Table>
          <Tbody>
            <Tr className="headRow">
              <Th>Skills</Th>
              <Th>Experience</Th>
              <Th>Rating</Th>
              <Th>Comments</Th>
            </Tr>

            <Tr>
              <Td data-label='OOPS'>OOPS</Td>
              <Td data-label='Experience'></Td>
              <Td data-label='Rating'></Td>
              <Td data-label='Comments'></Td>
            </Tr>

            <Tr>
              <Td data-label='Logical Thinking'>Logical Thinking</Td>
              <Td data-label='Experience'></Td>
              <Td data-label='Rating'></Td>
              <Td data-label='Comments'></Td>
            </Tr>

            <Tr>
              <Td data-label='Programming'>Programming</Td>
              <Td data-label='Experience'></Td>
              <Td data-label='Rating'></Td>
              <Td data-label='Comments'></Td>
            </Tr>
          </Tbody>
        </Table>

      </FeedbackSection>

      <InterviewerFeedback>
        <Table>
          <Tbody>
            <Tr className="headRow">
              <Th>Interview Status</Th>
              <Th>Interviewer Comments</Th>
            </Tr>

            <Tr>
              <Td data-label='Interview Status'>
                <Select>
                  <Option value="">-- Select --</Option>
                  <Option value="Selected - Proceed to Next Round">Selected - Proceed to Next Round</Option>
                  <Option value="Rejected">Rejected</Option>
                  <Option value="On-hold">On Hold</Option>
                </Select>
              </Td>
              <Td data-label='Interviewer Comments'></Td>
            </Tr>
          </Tbody>
        </Table>
      </InterviewerFeedback>

      <Button className="feedback-save-btn" onClick={e => { e.preventDefault(); }}>Save</Button>
    </CandidateFeedbackWrapper>
  )

}
export default CandidateFeedback;