import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition',
    isActive
      ? 'bg-emerald-700 text-white shadow-sm'
      : 'text-zinc-600 hover:bg-emerald-50 hover:text-emerald-800',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="DEVIUX Logo" className="h-12 w-12 rounded-lg object-cover" />
          <div>
            <p className="text-lg font-black uppercase text-zinc-950">DEVIUX</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Web Studio
            </p>
          </div>
        </NavLink>

        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
