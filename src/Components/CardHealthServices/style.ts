import styled from "styled-components";

export const CardHealthServicesContainer = styled.div`
  width: 20rem;
  height: 14rem;
  background: rgb(255, 237, 190);
  background: linear-gradient(
    119deg,
    rgba(255, 237, 190, 1) 0%,
    rgba(176, 158, 113, 1) 100%
  );
  border: 1px solid #ffedc0;
  padding: 1.5rem;

  h1 {
    color: ${(props) => props.theme["first-color"]};
    font-size: 1.56rem;
    margin-top: 1rem;
  }
`;
