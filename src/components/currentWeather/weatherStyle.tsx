import styled from "styled-components";
import { Container } from "../../style/style";

export const Weathercontainer = styled(Container)`
  width: 300px;
  border-radius: 6px;
  box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
  color: #fff;
  background-color: #333;
  margin: 20px auto 0 auto;
  padding: 0 20px 20px 20px;
`;

export const TopContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-item: center;
  .city {
    font-weight: 600;
    font-size: 18px;
    line-height: 1;
    margin: 0;
    letter-spacing: 1px;
  }
  .desc {
  }
`;
