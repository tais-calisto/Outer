import poligon from '../../assets/illustrations/frameHero.svg'

import { HeroStyle } from './style'

const Hero = () => {
  return (
    <HeroStyle>
      <section>
        <h1>A tecnologia que te leva mais longe</h1>
        <p>
          Nascemos para entregar inteligência, inovação e confiança nos recursos
          tecnológicos existentes no mercado corporativo.
        </p>
        <button>Saiba mais</button>
      </section>

      <img src={poligon} alt='Logo Altatech' />
    </HeroStyle>
  )
}

export default Hero
