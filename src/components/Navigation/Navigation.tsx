import logo from '../../assets/logos/altatech/logo.svg'
import { NavStyle } from './style'
import { useState } from 'react'
import {
  IconSearch,
  IconUser,
  IconShoppingCart,
  IconMenu2,
  IconX,
} from '@tabler/icons'
import NavItens from './navItens'

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <NavStyle>
      <div>
        <a href='/'>
          <img src={logo} alt='Altatech' />
        </a>
      </div>

      <div className='itens'>
        <ul className='links'>
          <NavItens />
        </ul>

        <button className='contact'>Entre em contato</button>

        <ul className='icons'>
          <li>
            <button>
              <IconSearch />
            </button>
          </li>
          <li>
            <button>
              <IconUser />
            </button>
          </li>
          <li>
            <button>
              <IconShoppingCart />
            </button>
          </li>
        </ul>

        <button className='menu' onClick={handleMenu}>
          {showMenu ? <IconX /> : <IconMenu2 />}
        </button>
      </div>
      {showMenu && (
        <ul className='menuMobile'>
          <button className='contactMobile'>Entre em contato</button>
          <NavItens />
        </ul>
      )}
    </NavStyle>
  )
}

export default Navigation
