import style from './Header.module.css'

import iginiteLogo from '../assets/images/ignite-logo.svg'

export function Header() {
  return (
    <header className={style.header}>
      <img src={iginiteLogo} alt='Logo ignite'></img>
    </header>
  )
}
