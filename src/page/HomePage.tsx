import Navigation from '../components/Navigation/Navigation'
import Hero from '../components/Hero/Hero'
import Backup from '../components/Services/Backup/Backup'
import Server from '../components/Services/Server/Server'
import More from '../components/Services/More/More'
import Form from '../components/Form/Form'
import Partners from '../components/Partners/Partners'
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'
import { HomeStyle } from './style'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

import { useEffect, useRef, useState } from 'react'

const HomePage = () => {
  // const ref = useRef<IParallax>(null!)

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      document.body.classList.add('first')
    } else {
      document.body.classList.remove('first')
    }
    if (window.scrollY > window.innerHeight * 2) {
      document.body.classList.add('second')
    } else {
      document.body.classList.remove('second')
    }
    if (window.scrollY > window.innerHeight * 3) {
      document.body.classList.add('third')
    } else {
      document.body.classList.remove('third')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <HomeStyle>
      <Navigation />
      <Hero />
      <Backup />
      <Server />
      <More />
      <Form />
      <Partners />
      <Newsletter />
      <Footer />
    </HomeStyle>
  )
}

export default HomePage
