import { useState } from 'react'
import { FormStyle } from './style'

const Form = () => {
  const [next, setNext] = useState(false)

  return (
    <FormStyle>
      <h2>Solicite um orçamento</h2>
      <div className='phases'>
        <div className='phase'>
          <svg
            width='50'
            height='57'
            viewBox='0 0 50 57'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2.75413 56.296C1.71476 56.8784 0.434697 56.1172 0.45001 54.9259L1.13311 1.78438C1.14842 0.593063 2.44763 -0.134931 3.47168 0.473989L49.1521 27.6363C50.1761 28.2453 50.157 29.7344 49.1176 30.3168L2.75413 56.296Z'
              fill={next ? '#A4B6DD' : '#EBF1F1'}
            />
          </svg>
          <h4>1</h4>
        </div>
        <div className='phase'>
          <svg
            width='50'
            height='57'
            viewBox='0 0 50 57'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2.75413 56.296C1.71476 56.8784 0.434697 56.1172 0.45001 54.9259L1.13311 1.78438C1.14842 0.593063 2.44763 -0.134931 3.47168 0.473989L49.1521 27.6363C50.1761 28.2453 50.157 29.7344 49.1176 30.3168L2.75413 56.296Z'
              fill={next ? '#EBF1F1' : '#A4B6DD'}
            />
          </svg>
          <h4>2</h4>
        </div>
      </div>

      {next ? (
        <form>
          <label htmlFor='message'>Mensagem</label>
          <textarea id='message' rows={8} />
          <div>
            <button
              className='backBtn'
              onClick={() => {
                setNext(false)
              }}
            >
              Voltar
            </button>
            <button>Enviar</button>
          </div>
        </form>
      ) : (
        <form>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' />
          <label htmlFor='phone'>Telefone</label>
          <input type='tel' id='phone' />
          <label htmlFor='email'>E- mail</label>
          <input type='text' id='email' />
          <label htmlFor='cpnj'>CNPJ</label>
          <input type='number' id='cnpj' />
          <button
            onClick={(event) => {
              event.preventDefault()
              setNext(true)
            }}
          >
            continuar
          </button>
        </form>
      )}
    </FormStyle>
  )
}

export default Form
