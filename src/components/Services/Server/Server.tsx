import image from '../../../assets/illustrations/server.svg'
import { ServicesStyle } from '../style'

const Server = () => {
  return (
    <ServicesStyle style={{ background: '#36C09F' }}>
      <img src={image}></img>
      <section className='server'>
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

export default Server
