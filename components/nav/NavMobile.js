import React from 'react'
import './style.scss'

class NavMobile extends React.Component {
  render () {
    return (
      <nav className='nav nav--mobile'>
        <div className='nav__logo'>
          &lt;Logo /&gt;
        </div>
        <div className='nav__links'>
            <a className='nav__link' href='https://www.google.com'>Link 1</a>
            <a className='nav__link' href='https://www.google.com'>Link 2</a>
            <a className='nav__link' href='https://www.google.com'>Link 3</a>
            <a className='nav__link' href='https://www.google.com'>Link 4</a>
            <a className='nav__link' href='https://www.google.com'>Link 5</a>
        </div>
      </nav>
    )
  }
}

export default NavMobile
