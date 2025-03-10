const Tag = ({ Text }) => {
  if (Text.length === 0) return null
  const textContainerSize = Text.length >= 15 ? 'w-40' : 'w-25'
  const textFormat = `❧ ${Text} ☙`
  const colors = [
    'bg-red-200',
    'bg-yellow-200',
    'bg-green-200',
    'bg-blue-200',
    'bg-indigo-200',
  ]
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  return (
    <span className={`${randomColor} ${textContainerSize} flex flex-col justify-center items-center text-gray-800 text-xs font-semibold py-1 px-2 rounded-full`}>
      {textFormat}
    </span>
  )
}

export default Tag
