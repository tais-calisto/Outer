import styled from 'styled-components'

export const ServicesStyle = styled.section`
  .BGbackup,
  .BGserver,
  .BGmore,
  .BGprivacy {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5rem;
    gap: 7rem;
    overflow: hidden;
  }

  .IMGonscreenLeft,
  .TXTonscreenLeft,
  .IMGonscreenRight,
  .TXTonscreenRight {
    transform: translateX(0px);
    opacity: 1;
  }

  .IMGoffscreenLeft,
  .TXToffscreenRight {
    transform: translateX(-100px);
    opacity: 0;
  }

  .IMGoffscreenRight,
  .TXToffscreenLeft {
    transform: translateX(100px);
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
    .btnPrimary,
    .btnSecundary {
      padding: 1rem 2rem;
    }
  }

  button {
    box-shadow: ${({ theme }) => theme.shadow};
  }

  .backup,
  .server,
  .more,
  .privacy {
    transition: 1s all ease-in-out;
  }

  .backup {
    padding-top: 8rem;
    color: ${({ theme }) => theme.colors.secundary100};
    .buttons {
      .btnPrimary,
      .btnSecundary {
        color: ${({ theme }) => theme.colors.secundary100};
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
      .btnPrimary {
        background: linear-gradient(96.82deg, #252b4a 0%, #455074 99.12%);
        color: ${({ theme }) => theme.colors.secundary100};
      }
      .btnSecundary {
        color: ${({ theme }) => theme.colors.primary500};
        background: transparent;
        border: 4px solid ${({ theme }) => theme.colors.primary500};
      }
    }
  }

  .more {
    padding-top: 5rem;
    color: ${({ theme }) => theme.colors.primary500};
    .buttons {
      .btnPrimary,
      .btnSecundary {
        color: ${({ theme }) => theme.colors.primary500};
      }
      .btnPrimary {
        background: linear-gradient(96.82deg, #e6ecec 0%, #c2c7ca 55.24%);
      }
      .btnSecundary {
        background: transparent;
        border: 4px solid ${({ theme }) => theme.colors.primary500};
      }
    }
  }

  .privacy {
    padding: 5rem 0;
    color: ${({ theme }) => theme.colors.secundary100};
    .buttons {
      .btnPrimary,
      .btnSecundary {
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

  @media screen and (max-width: 568px) {
    .IMGonscreenLeft,
    .TXTonscreenLeft,
    .IMGonscreenRight,
    .TXTonscreenRight,
    .IMGoffscreenLeft,
    .TXToffscreenRight,
    .IMGoffscreenRight,
    .TXToffscreenLeft {
      transform: translateX(0);
      opacity: 1;
    }

    flex-direction: row;

    padding-left: 0;
    padding-right: 0;
    gap: 0;
    position: relative;

    .BGbackup,
    .BGserver,
    .BGmore,
    .BGprivacy {
      padding-top: 0;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .BGbackup {
      background-color: ${({ theme }) => theme.colors.primary500};
    }
    .BGserver {
      background-color: ${({ theme }) => theme.colors.accent100};
    }
    .BGmore {
      background-color: ${({ theme }) => theme.colors.primary100};
    }
    .BGprivacy {
      background-color: ${({ theme }) => theme.colors.primary500};
    }

    img {
      top: 10rem;
      width: 50vw;
      position: absolute;
    }
    h2 {
      text-align: center;
      padding-bottom: 5vh;
    }
    p {
      text-align: right;
    }

    .buttons {
      width: 90%;
      margin: auto;
      align-items: center;
      justify-content: space-around;
      .btnPrimary {
        padding: 0.8rem;
      }
      .btnSecundary {
        padding: 0.5rem;
      }
    }

    .backup,
    .server,
    .more,
    .privacy {
      display: flex;
      flex-direction: column;
      padding-top: 1rem;
      p {
        width: 45%;
        align-self: flex-end;
        padding-bottom: 1rem;
        padding-right: 1.5rem;
      }
      .buttons {
        flex-direction: column;
        align-items: flex-end;
        gap: 1rem;
      }
    }
  }

  @media screen and (max-width: 968px) {
    .BGbackup,
    .BGserver,
    .BGmore,
    .BGprivacy {
      gap: 2rem;
    }
    img {
      width: 40vw;
    }

    .server,
    .privacy {
      .buttons {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }
    }
    .backup,
    .more {
      .buttons {
        flex-direction: column;
        align-items: flex-end;
        gap: 1rem;
      }
    }
  }
`
