export default function PageProgress({ bookProgress }) {
  // get the current page path
  return (
    <div className="flex flex-col gap-y-2 mt-2">
      <CurrentPageProgress bookProgress={bookProgress} />
      <CurrentCapProgress bookProgress={bookProgress} />
    </div>
  )
}

function CurrentPageProgress({ bookProgress = {} }) {
  return (
    <div className="current-page">
      <span className="italic font-bold mr-2">Current Page:</span>
      {bookProgress.book.pageProgress}
    </div>
  )
}

function CurrentCapProgress({ bookProgress = {} }) {
  return (
    <div>
      <span className="italic font-bold mr-2">Current Cap:</span>
      {bookProgress.book.capProgress}
    </div>
  )
}
