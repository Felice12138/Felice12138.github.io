import { NavLink } from 'react-router-dom'

const links = [
  { to: '/',        label: 'Home'    },
  { to: '/about',   label: 'About'   },
  { to: '/contact', label: 'Contact' },
  { to: '/works',   label: 'Works'   },
]

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            'navbar__link' + (isActive ? ' active' : '')
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
