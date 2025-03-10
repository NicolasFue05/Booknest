import Bar from '../features/bar'
import MenuLink from './menuLinks'

export default function Menu() {
  return (
    <nav className="flex flex-row">
      <Bar />
      <ul className="flex flex-col gap-7 mt-16">
        <MenuLink Path={'/'} Text={'Home'} />
        <MenuLink Path={'/books'} Text={'Books'} />
        <MenuLink Path={'/library'} Text={'Library'} />
        <MenuLink Path={'/about'} Text={'About'} />
      </ul>
    </nav>
  )
}
