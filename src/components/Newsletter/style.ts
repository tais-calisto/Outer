import styled from 'styled-components'

export const NewsletterStyle = styled.section`
  background-color: ${({ theme }) => theme.colors.primary100};
  padding: 1.5rem 5rem;
  form {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
  label {
    color: ${({ theme }) => theme.colors.primary500};
    font-weight: bold;
    font-size: 1.5rem;
  }
  input {
    border: transparent;
    width: 40%;
    background-color: ${({ theme }) => theme.colors.secundary100};
  }
  button {
    color: ${({ theme }) => theme.colors.secundary100};
    background: linear-gradient(96.82deg, #31365c 0%, #30344f 99.12%);
    padding: 0.5rem 1rem;
  }
`
