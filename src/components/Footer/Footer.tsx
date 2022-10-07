import { FooterStyle } from './style'
import phone from '../../assets/illustrations/phone.svg'
import icon from '../../assets/logos/altatech/icon.svg'
import { phones } from './phones'
import { siteMap } from './siteMap'
import { socialMedia } from './socialMedia'

const Footer = () => {
  return (
    <FooterStyle>
      <section className='contact'>
        <img src={phone} alt='Ícone de telefone'></img>
        <div className='phones'>
          {phones.map((phone, index) => {
            return (
              <p key={index}>
                <strong>{phone.city}: </strong>
                {phone.phone}
              </p>
            )
          })}
        </div>
      </section>
      <section className='informations'>
        <div className='about'>
          <img src={icon} alt='Ícone da Outer'></img>
          <h4>Outer</h4>
          <p>
            Cat gets stuck in tree firefighters try to get cat down firefighters
            get stuck in tree cat eats firefighters' slippers kitty power ignore
            the squirrels, you'll never catch them anyway for what a
            cat-ass-trophy!
          </p>
        </div>
        <div className='navegation'>
          <h4>Navegação</h4>
          <ul>
            {siteMap.map((link, index) => {
              return (
                <li key={index}>
                  <a href='/'>{link}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='service'>
          <div className='socialMedia'>
            <ul>
              {socialMedia.map((sm, index) => {
                return (
                  <li key={index}>
                    <a href={sm.link}>
                      <img src={sm.icon} alt={sm.alt} />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <h4>Atendimento</h4>
          <p>
            Segunda a Sexta das 08:00 às 18:00 Av. XXXXXX XXXXXXX, XXXX - Centro
            - CEP XXXXX-XXX - Cidade - Estado
          </p>
        </div>
      </section>
      <section className='copy'>
        <div>
          <p>Copyright &#169; 2022</p>
          <p>Todos os direitos reservados</p>
        </div>
        <div>
          <p>CNPJ: XX.XXX.XXX/XXXX-XX</p>
        </div>
      </section>
    </FooterStyle>
  )
}

export default Footer
