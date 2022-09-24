import styled from 'styled-components'

export const HeroStyle = styled.main`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  padding-top: 5rem;
  gap: 3rem;

  section {
    color: ${({ theme }) => theme.colors.primary500};
    padding-top: 8rem;
    padding-left: 5rem;
    h1,
    p {
      padding-bottom: 4rem;
    }
    button {
      background: linear-gradient(96.82deg, #1c203e 0%, #213b89 99.12%);
      color: ${({ theme }) => theme.colors.secundary100};
      box-shadow: ${({ theme }) => theme.shadow};
      padding: 1rem 2rem;
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary500};
      }
    }
  }

  @media screen and (max-width: 568px) {
    flex-direction: column;
    padding-top: 1rem;
    text-align: left;
    section {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    img {
      position: absolute;
      z-index: -100;
      top: 30vh;
      width: 50%;
      right: 0;
    }
    p {
      width: 50%;
    }
  }
`
