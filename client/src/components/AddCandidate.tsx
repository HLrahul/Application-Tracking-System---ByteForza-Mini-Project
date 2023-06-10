import { useState } from "react";
import { AddCandidateWrapper, Form, InputPair, Message, P, Input, Label, Section, CommonSkillsSection, SkillLabel, Left, Center, Right, Corner } from "../styles/AddCandidate.styles";
import { Button } from "../styles/Common.styles";

import { BASE_URL } from "../api/axios";
import axios from "../api/axios";

function AddCandidate() {

  const commonSkills = [
    'JavaScript',
    'Python',
    'Java',
    'HTML',
    'CSS',
    'React',
    'Node.js',
    'SQL',
    'Git',
    'Problem Solving',
    'TypeScript',
    'Flask',
    'Django',
  ];

  const [response, setResponse] = useState<string>("");

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
  const [sources, setSources] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  function postSubmit() {
    const form = document.getElementById("addCandidateForm") as HTMLFormElement;
    if (form) {
      form.reset();
    }

    setName("");
    setEmail("");
    setPhone(0);
    setSkills("");
    setCtc(0);
    setExpectedCtc(0);
    setLocation("");
    setPreferredLocation("");
    setSources("");
    setNotes("");
    setFile(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const handleSubmit = async () => {
    const form = document.getElementById("addCandidateForm") as HTMLFormElement;
    if (form && form.checkValidity()) {
      console.log("Request SENT!");
    } else if (form) {
      form.reportValidity();
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone.toString());
    formData.append('experience', experience.toString());
    formData.append('skills', skills);
    formData.append('notice_period', noticePeriod.toString());
    formData.append('ctc', ctc.toString());
    formData.append('expected_ctc', expectedCtc.toString());
    formData.append('location', location);
    formData.append('preferred_location', preferredLocation);
    formData.append('source', sources);
    formData.append('notes', notes);
    formData.append('resume', file as Blob); // Append the file to FormData

    try {
      const response = await axios.post(BASE_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the proper content type for FormData
        },
      });
      setResponse(response?.data?.message);
    } catch (err) {
      console.log(JSON.stringify(err));
      setResponse("Unable to add Candidate!");
    }

    postSubmit();
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const skill: string = event.target.value;

    if (event.target.checked) {
      setSkills((prevValue: string) => {
        if (prevValue) {
          return `${prevValue}, ${skill}`;
        }
        return skill;
      });
    } else {
      setSkills((prevValue: string) => {
        return prevValue.replace(`${skill}, `, '').replace(`${skill}`, '');
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    setFile(selectedFile || null);
  };

  return (
    <AddCandidateWrapper>
      <Message><P className="add-candidate-title"> {response} </P></Message>

      <Form encType="multipart/form-data" id="addCandidateForm">

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
            <Input type="number" placeholder="Phone Number" onChange={e => { setPhone(parseInt(e.target.value)); }} required />
          </InputPair>

          <InputPair>
            <P>Years of Experience</P>
            <Input type="number" placeholder="YOE" onChange={e => { setExperience(parseInt(e.target.value)); }} required />
          </InputPair>

        </Left>

        <Center>
          <InputPair>
            <P>Key Skills</P>
            <Input type="text"
              placeholder="Add key skills"
              value={skills}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSkills(e.target.value)} />
            <Section>
              <CommonSkillsSection>
                {commonSkills.map((skill: string, i: number) => (
                  <Label key={i} className="check-box">
                    <Input
                      key={`input-${i}`}
                      className="check-box"
                      type="checkbox"
                      value={skill}
                      onChange={handleCheckboxChange}
                    />
                    <SkillLabel>{skill}</SkillLabel>
                  </Label>
                ))}
              </CommonSkillsSection>
            </Section>
          </InputPair>

          <InputPair>
            <P>Notice Period</P>
            <Input type="number" placeholder="in months" onChange={e => { setNoticePeriod(parseInt(e.target.value)); }} required />
          </InputPair>

        </Center>

        <Right>
          <InputPair>
            <P>CTC</P>
            <Input type="number" step="0.1" placeholder="Cost to Company" onChange={e => { setCtc(parseFloat(e.target.value)); }} required />
          </InputPair>

          <InputPair>
            <P>Expected CTC</P>
            <Input type="number" step="0.1" placeholder="Expected CTC" onChange={e => { setExpectedCtc(parseFloat(e.target.value)); }} required />
          </InputPair>

          <InputPair>
            <P>Location</P>
            <Input type="text" placeholder="Location" onChange={e => { setLocation(e.target.value); }} required />
          </InputPair>

          <InputPair>
            <P>Preferred Location</P>
            <Input type="text" placeholder="Preferred Location" onChange={e => { setPreferredLocation(e.target.value); }} required />
          </InputPair>

        </Right>

        <Corner>
          <InputPair>
            <P>Source</P>
            <Input type="text" placeholder="Source" onChange={e => { setSources(e.target.value) }} list="sources" />
            <datalist id="sources">
              <option value="LinkedIn">LinkedIn</option>
              <option value="Naukri">Naukri</option>
              <option value="Referred by ">Referred</option>
            </datalist>
          </InputPair>

          <InputPair>
            <P>Notes</P>
            <Input className="notes-text-area" type="text-area" placeholder="Notes about the candidate" onChange={e => { setNotes(e.target.value); }} />
          </InputPair>

          <InputPair>
            <P>Resume</P>
            <Input type="file" accept=".pdf, .doc, .docx" onChange={handleFileChange} />
          </InputPair>

          <Button type="submit" className="add-candidate-btn" onClick={e => { e.preventDefault(); handleSubmit(); }}>
            Add Candidate
          </Button>
        </Corner>

      </Form>

    </AddCandidateWrapper >
  )

}

export default AddCandidate;