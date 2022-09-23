import { useEffect, useState } from 'react'
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

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * order) {
      setOnScreen(true)
    } else {
      setOnScreen(false)
    }
    if (window.scrollY > window.innerHeight * (order + 1)) {
      setOnScreen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (imageRight) {
    return (
      <ServicesStyle>
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
            <button className='btnPrimary'>{btn01}</button>
            <button className='btnSecundary'>{btn02}</button>
          </div>
        </section>
        <img
          src={image}
          className={
            onScreen
              ? `IMGonscreenRight ${name}`
              : `IMGoffscreenRight backup ${name}`
          }
        ></img>
      </ServicesStyle>
    )
  } else {
    return (
      <ServicesStyle>
        <img
          src={image}
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
            <button className='btnPrimary'>{btn01}</button>
            <button className='btnSecundary'>{btn02}</button>
          </div>
        </section>
      </ServicesStyle>
    )
  }
}

export default Service
