import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { NoMatch } from "./pages/NoMatch";
import { Registration } from "./pages/Registration";
import { Report } from "./pages/Report";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Registration />} />
          <Route path='report' element={<Report />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
