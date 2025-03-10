// import { useState } from 'react'
import MainTitle from '../features/titles/mainTitle'
import Menu from '../menu/menu'

export default function LeftTopPanel({ Page = '/' }) {
  // const [page, setPage] = useState(Page)

  return (
    <div className="flex flex-col">
      <MainTitle />
      <Menu />
    </div>
  )
}
