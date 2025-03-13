import { useState } from 'react'

const Tag = ({ Text }) => {
  const colors = [
    'bg-red-200',
    'bg-yellow-200',
    'bg-green-200',
    'bg-blue-200',
    'bg-indigo-200',
  ]

  // Se genera solo en el primer render
  const [randomColor] = useState(
    () => colors[Math.floor(Math.random() * colors.length)],
  )

  // Ahora el return condicional está después del hook
  if (Text.length === 0) return null

  const textContainerSize = Text.length >= 15 ? 'w-40' : 'w-30'
  const textFormat = `❧ ${Text} ☙`

  return (
    <span
      className={`${randomColor} ${textContainerSize} flex flex-col justify-center items-center text-gray-800 text-xs font-semibold py-1 px-2 rounded-full`}
    >
      {textFormat}
    </span>
  )
}

export default Tag
