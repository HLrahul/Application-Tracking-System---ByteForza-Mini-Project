import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import axios, { BASE_URL } from "../api/axios";

import { CandidateFeedbackWrapper, CandidateInfo, Table, Tbody, Th, Tr, FeedbackSection } from "../styles/CandidateFeedback.styles";
import { Td } from "../styles/Candidates.styles";

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
            <Tr>
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
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>

            <Tr>
              <Td data-label='Logical Thinking'>Logical Thinking</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>

            <Tr>
              <Td data-label='Programming'>Programming</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </FeedbackSection>

    </CandidateFeedbackWrapper>
  )

}
export default CandidateFeedback;