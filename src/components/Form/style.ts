import styled from 'styled-components'

export const FormStyle = styled.section`
  background: ${({ theme }) => theme.colors.primary500};
  color: ${({ theme }) => theme.colors.secundary100};
  padding: 0 5rem;
  text-align: center;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  h2 {
    padding: 1rem 0;
  }

  .phases {
    display: flex;
    justify-content: center;
    gap: 5rem;
    font-size: 3rem;

    .phase {
      position: relative;
      h4 {
        position: absolute;
        z-index: 0;
        top: 40%;
        left: 35%;
        transform: translate(-50%, -50%);
        color: ${({ theme }) => theme.colors.primary500};
        font-size: 1.5rem;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 50%;
    margin: auto;
    label {
      padding-top: 1rem;
    }

    input,
    textarea {
      border: 2px solid ${({ theme }) => theme.colors.primary100};
      background-color: transparent;
      color: ${({ theme }) => theme.colors.secundary100};
    }
    button {
      width: fit-content;
      align-self: center;
      margin-top: 1rem;
      background: linear-gradient(96.82deg, #a4b6dd 0%, #e3e3e3 97.58%);
      padding: 0.7rem 1.5rem;
    }
    .backBtn {
      background: transparent;
      padding: 0.4rem 1rem;
      color: ${({ theme }) => theme.colors.secundary100};
      border: 4px solid ${({ theme }) => theme.colors.secundary100};
    }
    div {
      display: flex;
      justify-content: space-around;
    }

    @media screen and (max-width: 568px) {
      width: 100%;
      padding-bottom: 2rem;
      button {
        padding: 0.8rem;
      }
      .backBtn {
        padding: 0.5rem;
      }
    }
  }
`
