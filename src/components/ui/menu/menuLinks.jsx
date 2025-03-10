import { NavLink } from 'react-router-dom'

export default function MenuLink({ Path, Text }) {
  return (
    <li>
      <NavLink
        to={Path}
        className={({ isActive }) =>
          isActive
            ? 'text-2xl text-soft-white'
            : 'w-3.5 text-gray-blue hover:text-soft-white hover:text-2xl hover:ml-2 transition-all duration-300'
        }
      >
        {({ isActive }) => (
          <>
            {isActive && <span className="mr-2 transition-all duration-10">⬦</span>}
            {Text}
          </>
        )}
      </NavLink>
    </li>
  )
}
