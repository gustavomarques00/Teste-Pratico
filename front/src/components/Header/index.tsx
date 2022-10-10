import { NavLink, Outlet } from "react-router-dom";
import {
  ContentArea,
  HeaderContainer,
  HeaderLI,
  HeaderNav,
  HeaderUL,
} from "./styles";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <h1>Teste Prático - 2022</h1>
        <HeaderNav>
          <HeaderUL>
            <HeaderLI>
              <NavLink to='/'>Home</NavLink>
            </HeaderLI>

            <HeaderLI>
              <NavLink to='/report'>Relatório</NavLink>
            </HeaderLI>
          </HeaderUL>
        </HeaderNav>
      </HeaderContainer>
      <ContentArea>
        <Outlet />
      </ContentArea>
    </>
  );
}
