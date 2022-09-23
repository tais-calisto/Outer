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
    }
  }
`
