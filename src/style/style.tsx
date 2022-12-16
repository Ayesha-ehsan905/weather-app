import styled from "styled-components";

export const Container = styled.div`
  max-width: 1080px;
  margin: 20px auto;

  //  if the main or parent div
  &.con {
    margin: 250px !important;
  }
  // if the style for child
  .con {
    margin: 250px !important;
  }
`;
