import Navigation from '../components/Navigation/Navigation'
import Hero from '../components/Hero/Hero'
import Backup from '../components/Services/Backup/Backup'
import Server from '../components/Services/Server/Server'
import More from '../components/Services/More/More'
import Form from '../components/Form/Form'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

import { useRef } from 'react'

const HomePage = () => {
  const ref = useRef<IParallax>(null!)

  return (
    <>
      <Navigation />
      <Hero />
      <Backup />
      <Server />
      <More />
      <Form />
    </>
  )
}

export default HomePage
