import { useState } from "react";
import { AddCandidateWrapper, Form, InputPair, P, Input, Label, Section, CommonSkillsSection, SkillLabel } from "../styles/AddCandidate.styles";
import { Button } from "../styles/Common.styles";

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
    'Agile',
    'Problem Solving',
    'React',
    'TypeScript',
    'Flask',
    'Django',
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState(0);
  const [skills, setSkills] = useState("");
  const [noticePeriod, setNoticePeriod] = useState(0);
  const [ctc, setCtc] = useState(0);
  const [expectedCtc, setExpectedCtc] = useState(0);
  const [location, setLocation] = useState("");
  const [preferredLocation, setPreferredLocation] = useState("");
  const [sources, setSources] = useState("");
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState<File | null>(null);

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
      <P className="add-candidate-title"> Candidate Details </P>

      <Form>
        <InputPair>
          <P>Name</P>
          <Input type="text" value={name} placeholder="Name" onChange={e => { setName(e.target.value); }} required />
        </InputPair>

        <InputPair>
          <P>Email</P>
          <Input type="email" value={email} placeholder="Email" onChange={e => { setEmail(e.target.value); }} required />
        </InputPair>

        <InputPair>
          <P>Years of Experience</P>
          <Input type="number" value={experience} placeholder="YOE" onChange={e => { setExperience(parseInt(e.target.value)); }} required />
        </InputPair>

        <InputPair>
          <P>Key Skills</P>
          <Input type="text"
            placeholder="Add key skills"
            value={skills}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSkills(e.target.value)} />
          <Section>
            {/* <P>Common Skills</P> */}
            <CommonSkillsSection>
              {commonSkills.map((skill: string) => (
                <Label key={skill} className="check-box">
                  <Input
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

        <InputPair>
          <P>CTC</P>
          <Input type="number" placeholder="Cost to Company" onChange={e => { setCtc(parseInt(e.target.value)); }} required />
        </InputPair>

        <InputPair>
          <P>Expected CTC</P>
          <Input type="number" placeholder="Expected CTC" onChange={e => { setExpectedCtc(parseInt(e.target.value)); }} required />
        </InputPair>

        <InputPair>
          <P>Location</P>
          <Input type="text" placeholder="Location" onChange={e => { setLocation(e.target.value); }} required />
        </InputPair>

        <InputPair>
          <P>Preferred Location</P>
          <Input type="text" placeholder="Preferred Location" onChange={e => { setPreferredLocation(e.target.value); }} required />
        </InputPair>

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

      </Form>

      <Button className="add-candidate-btn">
        + Add Candidate
      </Button>

    </AddCandidateWrapper>
  )

}

export default AddCandidate;