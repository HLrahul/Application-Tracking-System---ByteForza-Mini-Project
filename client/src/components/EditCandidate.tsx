import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import axios, { BASE_URL } from "../api/axios";

import { P, EditCandidateWrapper, EditForm, InputPair, Input, Select, Option, Center, Left, Right, Message } from "../styles/EditCandidate.styles";
import { Button } from "../styles/Common.styles";

function EditCandidate() {

  const requestRef = useRef(false);
  const { id } = useParams();

  const [resStatus, setResStatus] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number>(0);
  const [experience, setExperience] = useState<number>(0);
  const [skills, setSkills] = useState<string>("");
  const [noticePeriod, setNoticePeriod] = useState<number>(0);
  const [ctc, setCtc] = useState<number>(0);
  const [expectedCtc, setExpectedCtc] = useState<number>(0);
  const [location, setLocation] = useState<string>("");
  const [preferredLocation, setPreferredLocation] = useState<string>("");
  const [source, setSource] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  // const [file, setFile] = useState<File | null>(null);
  const [candidateStatus, setCandidateStatus] = useState<string>();
  const [interviewPanel, setInterviewPanel] = useState<string>();
  const [interviewDateTime, setInterviewDateTime] = useState("");
  const [requirement, setRequirement] = useState<string>();

  const getCandidateDetails = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);

      const receivedDate = new Date(response.data.interview_date_time);
      const formattedDateTime = receivedDate.toISOString().slice(0, 16);

      setName(response.data?.name);
      setEmail(response.data?.email);
      setPhone(response.data?.phone);
      setExperience(response.data?.experience);
      setSkills(response.data?.skills);
      setNoticePeriod(response.data?.notice_period);
      setCtc(response.data?.ctc);
      setExpectedCtc(response.data?.expected_ctc);
      setLocation(response.data?.location);
      setPreferredLocation(response.data?.preferred_location);
      setSource(response.data?.source);
      setNotes(response.data?.notes);
      setCandidateStatus(response.data?.candidate_status);
      setInterviewPanel(response.data?.interview_panel);
      setInterviewDateTime(formattedDateTime);
      setRequirement(response.data?.requirement_for_project);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!requestRef.current) {
      requestRef.current = true;
      getCandidateDetails();
    }
  });

  const updateCandidate = async () => {

    const formattedDateTime = interviewDateTime.toString();

    const candidate = {
      'id': id,
      'name': name,
      'email': email,
      'phone': phone,
      'experience': experience,
      'skills': skills,
      'notice_period': noticePeriod,
      'ctc': ctc,
      'expected_ctc': expectedCtc,
      'location': location,
      'preferred_location': preferredLocation,
      'source': source,
      'notes': notes,
      'candidate_status': candidateStatus,
      'interview_panel': interviewPanel,
      'interview_date_time': formattedDateTime,
      'requirement_for_project': requirement,
    };

    try {
      const response = await axios.put(BASE_URL, { ...candidate });
      setResStatus(response.data?.message);

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <EditCandidateWrapper>
      <Message> {resStatus} </Message>

      <EditForm>

        <Left>
          <InputPair>
            <P>Name</P>
            <Input type="text" value={name} placeholder="Name" onChange={e => { setName(e.target.value); }} required />
          </InputPair>

          <InputPair>
            <P>Email</P>
            <Input type="email" value={email} placeholder="Email" onChange={e => { setEmail(e.target.value); }} required />
          </InputPair>

          <InputPair>
            <P>Phone</P>
            <Input type="number" value={phone} placeholder="Phone Number" onChange={e => { setPhone(parseInt(e.target.value)); }} required />
          </InputPair>

          <InputPair>
            <P>Years of Experience</P>
            <Input type="number" value={experience} placeholder="YOE" onChange={e => { setExperience(parseInt(e.target.value)); }} required />
          </InputPair>

          <InputPair>
            <P>Skills</P>
            <Input type="text" value={skills} placeholder="Skills" onChange={e => { e.preventDefault(); setSkills(e.target.value); }} />
          </InputPair>

          <InputPair>
            <P>Notice Period</P>
            <Input type="number" value={noticePeriod} placeholder="in months" onChange={e => { setNoticePeriod(parseInt(e.target.value)); }} required />
          </InputPair>
        </Left>

        <Center>
          <InputPair>
            <P>CTC</P>
            <Input type="number" value={ctc} step="0.1" placeholder="Cost to Company" onChange={e => { setCtc(parseInt(e.target.value)); }} required />
          </InputPair>

          <InputPair>
            <P>Expected CTC</P>
            <Input type="number" value={expectedCtc} step="0.1" placeholder="Expected CTC" onChange={e => { setExpectedCtc(parseInt(e.target.value)); }} required />
          </InputPair>

          <InputPair>
            <P>Location</P>
            <Input type="text" value={location} placeholder="Location" onChange={e => { setLocation(e.target.value); }} required />
          </InputPair>

          <InputPair>
            <P>Preferred Location</P>
            <Input type="text" value={preferredLocation} placeholder="Preferred Location" onChange={e => { setPreferredLocation(e.target.value); }} required />
          </InputPair>

          <InputPair>
            <P>Source</P>
            <Input type="text" value={source} placeholder="Source" onChange={e => { setSource(e.target.value) }} list="sources" />
            <datalist id="sources">
              <option value="LinkedIn">LinkedIn</option>
              <option value="Naukri">Naukri</option>
              <option value="Referred by ">Referred</option>
            </datalist>
          </InputPair>

          <InputPair>
            <P>Notes</P>
            <Input className="notes-text-area" value={notes} type="text-area" placeholder="Notes about the candidate" onChange={e => { setNotes(e.target.value); }} />
          </InputPair>
        </Center>

        <Right>
          <InputPair>
            <P>Candidate Status</P>
            <Select value={candidateStatus || ""} onChange={e => { setCandidateStatus(e.target.value); }}>
              <Option value="">-- Select --</Option>
              <Option value="Shortlisted">Shortlisted</Option>
              <Option value="Tech 1">Tech 1</Option>
              <Option value="Tech 2">Tech 2</Option>
              <Option value="HR">HR</Option>
              <Option value="Rejected">Rejected</Option>
              <Option value="On Hold">On Hold</Option>
              <Option value="Offer Raised">Offer Raised</Option>
              <Option value="Will not Suit">Will not Suit</Option>
            </Select>
          </InputPair>

          <InputPair>
            <P>Interview Panel</P>
            <Input type="text" value={interviewPanel} onChange={e => { setInterviewPanel(e.target.value); }} />
          </InputPair>

          <InputPair>
            <P>Interview Date Time</P>
            <Input type="datetime-local" value={interviewDateTime} onChange={e => { setInterviewDateTime(e.target.value) }} />
          </InputPair>

          <InputPair>
            <P>Requirement for Project</P>
            <Input type="text" value={requirement} onChange={e => { setRequirement(e.target.value); }} />
          </InputPair>

          <Button className="update-candidate-btn" type="submit" onClick={e => { e.preventDefault(); updateCandidate(); }}>Update</Button>
        </Right>

      </EditForm>

    </EditCandidateWrapper>
  )

}
export default EditCandidate;