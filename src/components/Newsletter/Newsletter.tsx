import { NewsletterStyle } from './style'
const Newsletter = () => {
  return (
    <NewsletterStyle>
      <form>
        <label htmlFor='emailNews'>Recebe nossa newsletter</label>
        <input id='emailNews' type='email'></input>
        <button>inscreva-se</button>
      </form>
    </NewsletterStyle>
  )
}

export default Newsletter
