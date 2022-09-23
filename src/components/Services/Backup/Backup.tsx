import image from '../../../assets/illustrations/backup.svg'
import { ServicesStyle } from '../style'

const Backup = () => {
  return (
    <ServicesStyle>
      <img src={image}></img>
      <section className='backup'>
        <h2>Backup em nuvem: Segurança avançada para seus dados</h2>
        <p>
          Com a Criptografia de ponta a ponta os dados de sua empresa estarão
          sempre em segurança.
        </p>
        <div className='buttons'>
          <button className='btnPrimary'>Solicite um orçamento</button>
          <button className='btnSecundary'>Saiba mais</button>
        </div>
      </section>
    </ServicesStyle>
  )
}

export default Backup
