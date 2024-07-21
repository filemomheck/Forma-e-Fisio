import styled from "styled-components";

export const CardInfoBannerContainer = styled.div`
  width: 17.12rem;
  height: 7.87rem;
  border-radius: 4px;

  background-color: ${(props) => props.theme.white};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  img {
    width: 1.9rem;
  }

  a {
    font-size: 1.43rem;
    font-weight: 300;

    color: ${(props) => props.theme["first-color"]};
    text-decoration: none;

    &focus {
      color: red;
    }
  }
`;
