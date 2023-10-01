import './Header.modules.css'

import iginiteLogo from '../assets/images/ignite-logo.svg'

export function Header() {
  return (
    <header className="header">
      <img src={iginiteLogo} alt='Logo ignite'></img>
    </header>
  )
}
