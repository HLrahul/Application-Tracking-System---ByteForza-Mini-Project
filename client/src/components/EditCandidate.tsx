import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios, { BASE_URL } from "../api/axios";

import { P } from "../styles/EditCandidate.styles";

function EditCandidate() {

  const { id } = useParams();

  const [candidate, setCandidate] = useState({});

  const getCandidateDetails = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      setCandidate(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCandidateDetails();
  });

  return (
    <P>
      {JSON.stringify(candidate)}
      Edit Candidate!
    </P>
  )

}
export default EditCandidate;