import Navigation from '../components/Navigation/Navigation'
import Hero from '../components/Hero/Hero'
import Form from '../components/Form/Form'
import Partners from '../components/Partners/Partners'
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'
import Services from '../components/Services/Services'
import { HomeStyle } from './style'
import { useEffect } from 'react'

const HomePage = () => {
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
    if (window.scrollY > window.innerHeight * 4) {
      document.body.classList.add('fourth')
    } else {
      document.body.classList.remove('fourth')
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
      <Services />
      <Form />
      <Partners />
      <Newsletter />
      <Footer />
    </HomeStyle>
  )
}

export default HomePage
