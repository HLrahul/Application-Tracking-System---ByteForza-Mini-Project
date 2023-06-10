import { useEffect, useRef, useState } from 'react';
import axios, { BASE_URL } from '../api/axios';

import { P, ReportsWrapper, Table, Tbody, Tr, Td } from '../styles/Reports.styles';

function Reports() {

  const loadRef = useRef(false);

  const [totalCandidates, setTotalCandidates] = useState<number>(0);
  const [selectedCandidates, setSelectedCandidates] = useState<number>(0);

  const getTotalCandidates = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/total-candidates`);
      setTotalCandidates(response.data?.total_candidates);
    } catch (err) {
      console.log(err);
    }
  };

  const getSelectedCandidates = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/selected-candidates`);
      setSelectedCandidates(response.data?.selected_candidates_count);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!loadRef.current) {
      loadRef.current = true;

      getTotalCandidates();
      getSelectedCandidates();
    }
  }, []);

  return (
    <>
      <ReportsWrapper>
        <P> REPORTS </P>

        <Table>
          <Tbody>

            <Tr>
              <Td><P className='table-text'>No of Canidates Applied</P></Td>
              <Td>{totalCandidates}</Td>
            </Tr>

            <Tr>
              <Td><P className='table-text'>No of Candidates Selected</P></Td>
              <Td>{selectedCandidates}</Td>
            </Tr>
          </Tbody>
        </Table>
      </ReportsWrapper>
    </>
  )

}

export default Reports;