import image from '../../../assets/illustrations/more.svg'
import { ServicesStyle } from '../style'

const More = () => {
  return (
    <ServicesStyle>
      <img src={image}></img>
      <section className='more'>
        <h2>Server VPS: Tenha o seu servidor virtual</h2>
        <p>
          Nosso Server Cloud dispõe de escalabilidade, segurança para a sua
          aplicação e performance.
        </p>
        <div className='buttons'>
          <button className='btnPrimary'>Solicite um orçamento</button>
          <button className='btnSecundary'>Saiba mais</button>
        </div>
      </section>
    </ServicesStyle>
  )
}

export default More
