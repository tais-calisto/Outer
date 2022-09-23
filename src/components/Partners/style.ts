import styled from 'styled-components'
export const PartnersStyle = styled.section`
  padding: 5rem 0;
  margin: 5rem 0;
  background-color: ${({ theme }) => theme.colors.secundary300};
  h2 {
    text-align: center;
    color: ${({ theme }) => theme.colors.primary500};
    padding-bottom: 1rem;
  }
  .slider {
    height: 15vh;
    display: grid;
    place-items: center;
    position: relative;
    width: 90%;
    margin: auto;
    overflow: hidden;
  }
  .slide-track {
    display: flex;
    width: calc(20vw * 8);
    animation: scroll 50s linear infinite;
  }

  .slide {
    display: flex;
    align-items: center;
    padding: 1rem;
  }
  img {
    width: 100%;
    object-fit: cover;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-20vw * 4));
    }
  }
`
