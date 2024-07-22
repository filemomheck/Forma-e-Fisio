import styled from "styled-components";

export const CardInformationHealthConditionsContainer = styled.div`
  max-width: 24.68rem;
  text-align: center;

  h1 {
    padding-top: 1rem;
    font-size: 1.7rem;
    font-weight: 700;
    color: ${(props) => props.theme["first-color"]};
  }

  p {
    padding-top: 1rem;
    font-size: 1.56rem;
    font-weight: 300;
    color: ${(props) => props.theme["first-color"]};
  }

  @media (max-width: 1200px) {
    p {
      font-size: 1.25rem;
    }
  }
`;
