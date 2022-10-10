import styled from "styled-components";

export const CrudArea = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  p {
    color: red;
  }
  form {
    width: 100%;
  }
  h2 {
    width: 100%;
    text-align: center;
    margin: 1rem 0;
  }
  label {
    font-size: 1.2rem;
  }
  input {
    width: 100%;
    border: 0;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
  input[type="submit"] {
    margin-top: 1rem;
  }
  select {
    font-size: 1rem;
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
  button {
    width: 100%;
    padding: 0.5rem;
    border-radius: 1rem;
    margin-top: 1rem;
    border: 0;
    cursor: pointer;
    transition: all 0.5s;
    font-size: 20px;
    :hover {
      opacity: 0.8;
    }
  }
`;
