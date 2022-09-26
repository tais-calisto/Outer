import { PartnersStyle } from './style'
import { logos } from './images'

const Partners = () => {
  return (
    <PartnersStyle>
      <h2>Parceiros</h2>
      <div className='slider'>
        <div className='slide-track'>
          {logos.map((logo) => {
            return (
              <div className='slide'>
                <img src={logo.logo} alt={logo.alt} />
              </div>
            )
          })}
          {logos.map((logo) => {
            return (
              <div className='slide'>
                <img src={logo.logo} alt={logo.alt} />
              </div>
            )
          })}
        </div>
      </div>
    </PartnersStyle>
  )
}

export default Partners
