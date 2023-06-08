import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import axios, { BASE_URL } from "../api/axios";

import { CandidateFeedbackWrapper, CandidateInfo, Table, Tbody, Th, Tr, FeedbackSection, Input, InterviewerFeedback, Select, Option, Message } from "../styles/CandidateFeedback.styles";
import { Td } from "../styles/Candidates.styles";
import { Button } from "../styles/Common.styles";

function CandidateFeedback() {

  const loadRef = useRef(false);
  const { id } = useParams();

  const [resMessage, setResMessage] = useState<string>();

  const [name, setName] = useState();
  const [skills, setSkills] = useState();

  const [oopsExperience, setOopsExperience] = useState<number>();
  const [oopsRating, setOopsRating] = useState<number>();
  const [oopsComments, setOopsComments] = useState<string>();
  const [logicalThinkingExperience, setLogicalThinkingExperience] = useState<number>();
  const [logicalThinkingRating, setLogicalThinkingRating] = useState<number>();
  const [logicalThinkingComments, setLogicalThinkingComments] = useState<string>();
  const [programmingExperience, setProgrammingExperience] = useState<number>();
  const [programmingRating, setProgrammingRating] = useState<number>();
  const [programmingComments, setProgrammingComments] = useState<string>();
  const [interviewStatus, setInterviewStatus] = useState<string>();
  const [interviewerComments, setInterviewerComments] = useState<string>();

  const getCandidate = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);

      setName(response.data?.name);
      setSkills(response.data?.skills);
    } catch (err) {
      console.log(err);
    }
  };

  const getCandidateFeedback = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/candidate-feedback/${id}`);

      setOopsExperience(response.data?.oops_experience);
      setOopsRating(response.data?.oops_rating);
      setOopsComments(response.data?.oops_comments);
      setLogicalThinkingExperience(response.data?.logical_thinking_experience);
      setLogicalThinkingRating(response.data?.logical_thinking_rating);
      setLogicalThinkingComments(response.data?.logical_thinking_comments);
      setProgrammingExperience(response.data?.programming_experience);
      setProgrammingRating(response.data?.programming_rating);
      setProgrammingComments(response.data?.programming_comments);
      setInterviewStatus(response.data?.interview_status);
      setInterviewerComments(response.data?.interviewer_comments);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!loadRef.current) {
      loadRef.current = true;
      getCandidate();
      getCandidateFeedback();
    }
  });

  const updateCandidateFeedback = async () => {
    const candidateFeedback = {
      'oops_experience': oopsExperience,
      'oops_rating': oopsRating,
      'oops_comments': oopsComments,
      'logical_thinking_experience': logicalThinkingExperience,
      'logical_thinking_rating': logicalThinkingRating,
      'logical_thinking_comments': logicalThinkingComments,
      'programming_experience': programmingExperience,
      'programming_rating': programmingRating,
      'programming_comments': programmingComments,
      'interview_status': interviewStatus,
      'interviewer_comments': interviewerComments,
    }

    try {
      const response = await axios.put(`${BASE_URL}/candidate-feedback/${id}`, { ...candidateFeedback });
      setResMessage(response.data?.message);

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CandidateFeedbackWrapper>
      <Message> {resMessage} </Message>

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
              <Td data-label='Experience'>
                <Input type="number" value={oopsExperience} onChange={e => { setOopsExperience(parseInt(e.target.value)); }} />
              </Td>
              <Td data-label='Rating'>
                <Input type="number" value={oopsRating} onChange={e => { setOopsRating(parseInt(e.target.value)); }} />
              </Td>
              <Td data-label='Comments'>
                <Input className="comments-field" type="text" value={oopsComments} onChange={e => { setOopsComments(e.target.value); }} />
              </Td>
            </Tr>

            <Tr>
              <Td data-label='Logical Thinking'>Logical Thinking</Td>
              <Td data-label='Experience'>
                <Input type="number" value={logicalThinkingExperience} onChange={e => { setLogicalThinkingExperience(parseInt(e.target.value)); }} />
              </Td>
              <Td data-label='Rating'>
                <Input type="number" value={logicalThinkingRating} onChange={e => { setLogicalThinkingRating(parseInt(e.target.value)); }} />
              </Td>
              <Td data-label='Comments'>
                <Input className="comments-field" type="text" value={logicalThinkingComments} onChange={e => { setLogicalThinkingComments(e.target.value); }} />
              </Td>
            </Tr>

            <Tr>
              <Td data-label='Programming'>Programming</Td>
              <Td data-label='Experience'>
                <Input type="number" value={programmingExperience} onChange={e => { setProgrammingExperience(parseInt(e.target.value)); }} />
              </Td>
              <Td data-label='Rating'>
                <Input type="number" value={programmingRating} onChange={e => { setProgrammingRating(parseInt(e.target.value)); }} />
              </Td>
              <Td data-label='Comments'>
                <Input className="comments-field" type="text" value={programmingComments} onChange={e => { setProgrammingComments(e.target.value); }} />
              </Td>
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
                <Select value={interviewStatus} onChange={e => { setInterviewStatus(e.target.value); }} >
                  <Option value="">-- Select --</Option>
                  <Option value="Selected - Proceed to Next Round">Selected - Proceed to Next Round</Option>
                  <Option value="Rejected">Rejected</Option>
                  <Option value="On-hold">On Hold</Option>
                </Select>
              </Td>
              <Td data-label='Interviewer Comments'>
                <Input className="comments-field" type="text" value={interviewerComments} onChange={e => { setInterviewerComments(e.target.value); }} />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </InterviewerFeedback>

      <Button className="feedback-save-btn" onClick={e => { e.preventDefault(); updateCandidateFeedback(); }}>Save</Button>
    </CandidateFeedbackWrapper>
  )

}
export default CandidateFeedback;