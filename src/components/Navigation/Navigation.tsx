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
import { Link } from 'react-scroll'

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <NavStyle>
      <div>
        <a href='/'>
          <img src={logo} alt='Outer' />
        </a>
      </div>

      <div className='itens'>
        <ul className='links'>
          <NavItens />
        </ul>

        <Link
          className='contact'
          to='budget'
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button>Entre em contato</button>
        </Link>

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
          <Link to='budget' smooth={true} offset={-100} duration={500}>
            <button className='contactMobile' onClick={handleMenu}>
              Entre em contato
            </button>
          </Link>
          <NavItens />
        </ul>
      )}
    </NavStyle>
  )
}

export default Navigation
