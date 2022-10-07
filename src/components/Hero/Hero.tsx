import poligon from '../../assets/illustrations/frameHero.svg'

import { HeroStyle } from './style'

const Hero = () => {
  return (
    <HeroStyle>
      <section>
        <h1>A tecnologia que te leva mais longe</h1>
        <p>
          Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet.
          Gummies croissant macaroon dessert. Chocolate cake dragée pie.
        </p>
        <button>Saiba mais</button>
      </section>

      <img src={poligon} alt='Logo Altatech' />
    </HeroStyle>
  )
}

export default Hero
