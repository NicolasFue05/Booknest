export default function Bar({ isSeparator }) {
  const separatorMarginTop = isSeparator ? 'mt-8' : ''
  const separatorHeight = isSeparator ? 'h-160' : 'h-64'
  const separatorMarginLeft = isSeparator ? 'ml-1' : 'ml-9'

  return (
    <div
      className={`${separatorMarginTop} ${separatorMarginLeft} flex flex-col items- justify-start font-bold text-soft-white`}
    >
      <span>⬦</span>
      <div
        className={`${separatorHeight} ml-1.5 w-px h-64 bg-soft-white my-2`}
      />
      <span>⬦</span>
    </div>
  )
}
