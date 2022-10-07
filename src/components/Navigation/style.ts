import styled from 'styled-components'

export const NavStyle = styled.header`
  padding: 0.5rem ${({ theme }) => theme.spacing.margin};
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 7fr;
  gap: 8rem;
  background-color: ${({ theme }) => theme.colors.secundary100};
  position: fixed;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  .itens {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    align-items: center;
    gap: 1rem;
  }
  img {
    width: 100%;
  }
  .links li {
    &:hover {
      transform: scale(1.05);
    }
  }

  ul,
  .icons {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);
    a {
      color: ${({ theme }) => theme.colors.primary500};
    }
  }

  .contact {
    button {
      padding: 0.5rem 1rem;
      background: linear-gradient(
        120deg,
        ${({ theme }) => theme.colors.primary500},
        ${({ theme }) => theme.colors.primary300}
      );
      color: ${({ theme }) => theme.colors.secundary100};
    }
  }

  .icons {
    grid-template-columns: repeat(3, 1fr);
    button {
      background: transparent;
      color: ${({ theme }) => theme.colors.primary500};
    }
  }

  .menu,
  .menuMobile {
    display: none;
  }

  @media screen and (max-width: 568px) {
    .links,
    .contact {
      display: none;
    }
    .menu {
      display: block;
      background: transparent;
      color: ${({ theme }) => theme.colors.primary500};
    }
    .itens {
      grid-template-columns: repeat(2, 1fr);
    }
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 1rem;
    .menuMobile {
      display: block;
      text-align: center;
      grid-column: 1 / 3;
      line-height: 2rem;
      height: 100vh;
    }
  }

  @media screen and (max-width: 968px) {
    .links,
    .contact {
      display: none;
    }
    img {
      width: 45%;
    }
    .menu {
      display: block;
      background: transparent;
      color: ${({ theme }) => theme.colors.primary500};
    }
    .itens {
      grid-template-columns: repeat(2, 1fr);
    }
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 1rem;
    .menuMobile {
      display: block;
      text-align: center;
      grid-column: 1 / 3;
      line-height: 2rem;
      height: 100vh;
    }
    .contactMobile {
      padding: 0.5rem 1rem;
      background: linear-gradient(
        120deg,
        ${({ theme }) => theme.colors.primary500},
        ${({ theme }) => theme.colors.primary300}
      );
      color: ${({ theme }) => theme.colors.secundary100};

      margin: 2rem;
    }
  }
`
