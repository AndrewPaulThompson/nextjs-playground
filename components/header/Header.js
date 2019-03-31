import React from 'react'
import NavDesktop from '../nav/NavDesktop'
import NavMobile from '../nav/NavMobile'
import './style.scss'

class Header extends React.Component {
  render () {
    return (
      <header className='header'>
        <div className='header__container'>
          <NavDesktop />
          <NavMobile />
        </div>
      </header>
    )
  }
}

export default Header
