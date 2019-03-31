import React from 'react'
import './style.scss'

class NavDesktop extends React.Component {
  render () {
    return (
        <nav className='nav nav--desktop'>
            <div className='nav__links'>
                <a className='nav__link' href='https://www.google.com'>Link 1</a>
                <a className='nav__link' href='https://www.google.com'>Link 2</a>
                <a className='nav__link' href='https://www.google.com'>Link 3</a>
            </div>
            <div className='nav__logo'>
                &lt;Logo /&gt;
            </div>
            <div className='nav__links'>
                <a className='nav__link' href='https://www.google.com'>Link 4</a>
                <a className='nav__link' href='https://www.google.com'>Link 5</a>
            </div>
        </nav>
    )
  }
}

export default NavDesktop
