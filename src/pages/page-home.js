import styled from "styled-components";
import HeaderView from "../components/header";
import SearchBar from "../components/search-components/search-jobs";
import SearchLocation from "../components/search-components/search-location";
import CardJobs from "../components/card-jobs";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 1vh;
`;

function PageHome() {
  return (
    <Grid>
      <HeaderView />
      <SearchBar />
      <SearchLocation />
      <CardJobs />
    </Grid>
  );
}

export default PageHome;
