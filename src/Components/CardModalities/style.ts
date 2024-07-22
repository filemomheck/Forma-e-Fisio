import styled from "styled-components";

export const CardModalitiesContainer = styled.section`
  max-width: 26.87rem;
  background-color: #747f71;
  border-radius: 4px;

  h1 {
    padding: 1rem;

    font-size: 1.56rem;
    text-transform: uppercase;

    background: linear-gradient(
      105deg,
      rgba(255, 237, 192, 1),
      rgba(177, 155, 100, 1)
    );
    -webkit-background-clip: text;
    color: transparent;
    background-clip: text;
  }

  img {
    width: 100%;
  }

  p {
    padding: 1rem;
    font-size: 1.25rem;
    line-height: 1.6;
    color: ${(props) => props.theme.white};
  }
  
`;
