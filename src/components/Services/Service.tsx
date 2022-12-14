import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { ServicesStyle } from './style'

type ServiceProps = {
  order: number
  title: string
  text: string
  btn01: string
  btn02: string
  image: string
  imageRight: boolean
  name: string
}

const Service = ({
  name,
  order,
  title,
  text,
  btn01,
  btn02,
  image,
  imageRight,
}: ServiceProps) => {
  const [onScreen, setOnScreen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * order) {
        setOnScreen(true)
      } else {
        setOnScreen(false)
      }
      if (window.scrollY > window.innerHeight * (order + 1.5)) {
        setOnScreen(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [order])

  if (imageRight) {
    return (
      <ServicesStyle>
        <div className={`BG${name}`}>
          <section
            className={
              onScreen
                ? `TXTonscreenRight ${name}`
                : `TXToffscreenRight backup ${name}`
            }
          >
            <h2>{title}</h2>
            <p>{text}</p>
            <div className='buttons'>
              <Link to='budget' smooth={true} offset={-100} duration={500}>
                <button className='btnPrimary'>{btn01}</button>
              </Link>
              <button className='btnSecundary'>{btn02}</button>
            </div>
          </section>
          <img
            src={image}
            alt='Imagem ilustrativa'
            className={
              onScreen
                ? `IMGonscreenRight ${name}`
                : `IMGoffscreenRight backup ${name}`
            }
          ></img>
        </div>
      </ServicesStyle>
    )
  } else {
    return (
      <ServicesStyle>
        <div className={`BG${name}`}>
          <img
            src={image}
            alt='Imagem ilustrativa'
            className={
              onScreen
                ? `IMGonscreenLeft ${name}`
                : `IMGoffscreenLeft backup ${name}`
            }
          ></img>
          <section
            className={
              onScreen
                ? `TXTonscreenLeft ${name}`
                : `TXToffscreenLeft backup ${name}`
            }
          >
            <h2>{title}</h2>
            <p>{text}</p>
            <div className='buttons'>
              <Link to='budget' smooth={true} offset={-100} duration={500}>
                <button className='btnPrimary'>{btn01}</button>
              </Link>
              <button className='btnSecundary'>{btn02}</button>
            </div>
          </section>
        </div>
      </ServicesStyle>
    )
  }
}

export default Service
