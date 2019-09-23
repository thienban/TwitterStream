import styled from "styled-components";

export const Grid2Columns = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto;
  grid-gap: 10%;
  padding: 0.5rem 0.5rem;
`;

export const Grid1Columns = styled.div`
  display: grid
  grid-template-columns: auto;
  grid-template-rows: auto auto
  grid-gap: 1%
  grid-template-areas:
    ". a a ."
    ". a a .";
`;