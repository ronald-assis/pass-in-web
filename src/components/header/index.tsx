import nlwUniteIcon from '../../assets/nlww-unite-icon.svg'
import { NavLink } from '../nav-link'

export function Header() {
  return (
    <header className="flex items-center gap-5 py-2">
      <img src={nlwUniteIcon} alt="Icon" />

      <nav className="flex items-center gap-5">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </header>
  )
}
