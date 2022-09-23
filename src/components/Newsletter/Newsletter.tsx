import { NewsletterStyle } from './style'

const Newsletter = () => {
  return (
    <NewsletterStyle>
      <form>
        <label htmlFor='emailNews' className='newsLabel'>
          Receba nossa newsletter:{' '}
        </label>
        <input
          id='emailNews'
          type='email'
          placeholder='Insira seu melhor e-mail'
        ></input>
        <button>Enviar</button>
      </form>
    </NewsletterStyle>
  )
}

export default Newsletter
