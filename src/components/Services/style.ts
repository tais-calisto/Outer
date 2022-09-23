import styled from 'styled-components'

export const ServicesStyle = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5rem;
  gap: 7rem;

  overflow: hidden;

  .IMGonscreenLeft,
  .TXTonscreenLeft,
  .IMGonscreenRight,
  .TXTonscreenRight {
    transform: translateX(0px);
    opacity: 1;
  }

  .IMGoffscreenLeft,
  .TXToffscreenRight {
    transform: translateX(-200px);
    opacity: 0;
  }

  .IMGoffscreenRight,
  .TXToffscreenLeft {
    transform: translateX(200px);
    opacity: 0;
  }

  h2 {
    padding-top: 2rem;
  }

  h2,
  p {
    padding-bottom: 4rem;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  button {
    box-shadow: ${({ theme }) => theme.shadow};
  }

  .backup {
    padding-top: 5rem;
    color: ${({ theme }) => theme.colors.secundary100};
    .buttons {
      .btnPrimary,
      .btnSecundary {
        color: ${({ theme }) => theme.colors.secundary100};
        padding: 1rem 2rem;
      }
      .btnPrimary {
        background: linear-gradient(96.82deg, #36c09f 0%, #0b8967 55.24%);
      }
      .btnSecundary {
        background: transparent;
        border: 4px solid ${({ theme }) => theme.colors.accent100};
      }
    }
  }

  .server {
    padding-top: 5rem;
    color: ${({ theme }) => theme.colors.black};
    .buttons {
      .btnPrimary,
      .btnSecundary {
        padding: 1rem 2rem;
      }
      .btnPrimary {
        background: linear-gradient(96.82deg, #252b4a 0%, #455074 99.12%);
        color: ${({ theme }) => theme.colors.secundary100};
      }
      .btnSecundary {
        color: ${({ theme }) => theme.colors.black};
        background: transparent;
        border: 4px solid ${({ theme }) => theme.colors.secundary100};
      }
    }
  }

  .more {
    padding-top: 5rem;
    color: ${({ theme }) => theme.colors.primary500};
    .buttons {
      .btnPrimary,
      .btnSecundary {
        padding: 1rem 2rem;
        color: ${({ theme }) => theme.colors.primary500};
      }
      .btnPrimary {
        background: linear-gradient(96.82deg, #e6ecec 0%, #c2c7ca 55.24%);
      }
      .btnSecundary {
        background: transparent;
        border: 4px solid ${({ theme }) => theme.colors.secundary100};
      }
    }
  }

  .privacy {
    padding: 5rem 0;
    color: ${({ theme }) => theme.colors.secundary100};
    .buttons {
      .btnPrimary,
      .btnSecundary {
        padding: 1rem 2rem;
      }
      .btnPrimary {
        background: linear-gradient(96.82deg, #a4b6dd 0%, #b9c2d0 99.12%);
        color: ${({ theme }) => theme.colors.primary500};
      }
      .btnSecundary {
        color: ${({ theme }) => theme.colors.secundary100};
        background: transparent;
        border: 4px solid ${({ theme }) => theme.colors.secundary100};
      }
    }
  }
`
