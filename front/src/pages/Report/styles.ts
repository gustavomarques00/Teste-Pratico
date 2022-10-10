import styled from "styled-components";

export const ReportContainer = styled.div`
  table {
    width: 100%;
    text-align: center;
  }
  table,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th,
  td {
    padding: 1rem;
  }
  tfoot,
  thead {
    background-color: #383838;
  }
  input {
    width: 100%;
    border: 0;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
`;
