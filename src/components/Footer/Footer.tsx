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
        <img src={phone}></img>
        <div className='phones'>
          {phones.map((phone) => {
            return (
              <p>
                <strong>{phone.city}: </strong>
                {phone.phone}
              </p>
            )
          })}
        </div>
      </section>
      <section className='informations'>
        <div className='about'>
          <img src={icon}></img>
          <h4>Altatech</h4>
          <p>
            Uma empresa referência em soluções tecnológicas, a Altatech nasceu
            para entregar inteligência, inovação e confiança nos recursos
            tecnológicos existentes no mercado corporativo.
          </p>
        </div>
        <div className='navegation'>
          <h4>Navegação</h4>
          <ul>
            {siteMap.map((link) => {
              return (
                <li>
                  <a href='/'>{link}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='service'>
          <div className='socialMedia'>
            <ul>
              {socialMedia.map((sm) => {
                const { icon } = sm
                return (
                  <li>
                    <a href={sm.link}>
                      <img src={sm.icon} alt='' />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <h4>Atendimento</h4>
          <p>
            Segunda a Sexta das 08:00 às 18:00 Av. Juscelino Kubitscheck, 1905 -
            Centro CEP 86010-540 - Londrina - PR comercial@altatech.com.br
          </p>
        </div>
      </section>
      <section className='copy'>
        <div>
          <p>Copyright 2022</p>
          <p>Todos os direitos reservados</p>
        </div>
        <div>
          <p>CNPJ: 05.365.132/0001-30</p>
        </div>
      </section>
    </FooterStyle>
  )
}

export default Footer
