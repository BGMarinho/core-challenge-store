import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  grid-area: Header;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  gap: 1rem;
  padding-top: 1rem;

  [id*='mobile'] {
    display: flex;
  }
  [id*='desktop'] {
    display: none;
  }
  [class*='header-icons'] {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 1080px) {
    [id*='mobile'] {
      display: none;
    }
    [id*='desktop'] {
      display: flex;
    }
  }
`;
