import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 1rem 0;
  background-color: #5c5c5c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    margin: 2rem;
  }
`

export const HeaderNav = styled.nav`
  margin-top: 1rem;
`

export const HeaderUL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`

export const HeaderLI = styled.li`
  float: left;

  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    transition: 0.5s;
  }

  a:hover{
    background-color: #d9d9d9;
  }
`
export const ContentArea = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto;
  background-color: gray;
  padding: 2.5rem 5rem;
  border-radius: 1rem;
`

