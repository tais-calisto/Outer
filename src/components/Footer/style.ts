import styled from 'styled-components'

export const FooterStyle = styled.footer`
  .contact {
    padding: 5rem;
    display: flex;
    gap: 2rem;
    .phones {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      color: ${({ theme }) => theme.colors.primary100};
    }
  }

  .informations {
    color: ${({ theme }) => theme.colors.primary500};
    p {
      font-size: 1rem;
    }
    padding: 2rem 5rem;
    background: ${({ theme }) => theme.colors.secundary100};
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    column-gap: 4rem;
    h4 {
      padding: 1rem 0;
    }
    .about {
      img {
        width: 10vw;
      }
    }
    .navegation {
      h4 {
        text-align: center;
      }
      ul {
        padding-top: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;

        column-gap: 2rem;
        row-gap: 1rem;
        text-align: center;
        li {
          a {
            color: ${({ theme }) => theme.colors.primary500};
          }
        }
      }
    }
    .service {
      text-align: right;
      .socialMedia ul {
        display: flex;
        flex-direction: row;
        justify-content: end;
        gap: 1rem;
      }
    }
  }
  .copy {
    background-color: ${({ theme }) => theme.colors.secundary300};
    padding: 1rem 5rem;
    color: ${({ theme }) => theme.colors.primary500};
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 718px) {
    .contact {
      padding: 2rem 1rem;
      gap: 1rem;
      .phones {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }
    }

    .informations {
      p {
        font-size: 0.8rem;
      }
      padding: 2rem 1rem;

      display: flex;
      flex-direction: column;
      row-gap: 2rem;
      text-align: center;

      .navegation {
        ul {
          padding-top: 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;

          column-gap: 1rem;

          li {
            a {
              font-size: 0.8rem;
            }
          }
        }
      }
      .service {
        text-align: center;
        .socialMedia ul {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 1rem;
          padding-bottom: 1rem;
        }
      }
    }
    .copy {
      padding: 1rem;

      p {
        font-size: 0.8rem;
      }
    }
  }
`
