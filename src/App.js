import styled from "styled-components";
import PageHome from "./pages/home";
import JobSelect from "./pages/jobSelect";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderView from "./components/header";
import FooterView from "./components/footer";
import PageError from "./pages/notFound";
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;
`;

function App() {
  return (
    <Router>
      <Grid>
        <HeaderView />
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route exact path="/jobs" component={JobSelect} />
          <Route component={PageError} />
        </Switch>
        <FooterView />
      </Grid>
    </Router>
  );
}

export default App;
