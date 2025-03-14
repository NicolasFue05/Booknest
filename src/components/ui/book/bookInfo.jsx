import { useState } from 'react'
import BookButton from '../features/buttons/bookButton'
import Tag from '../features/tags/tag'
import PageProgress from '../features/progress/pageProgress'
import SaveButton from '../features/buttons/saveChanges'
import ProgressBar from '../features/progress/progressBar'

export default function BookInformation({ book, closeBookInfo, UpdateBooks }) {
  const [isClosed, setIsClosed] = useState(false)

  const storedBook = localStorage.getItem(book.book.ISBN)
    ? JSON.parse(localStorage.getItem(book.book.ISBN))
    : null

  const currentPage = storedBook ? storedBook.book.pageProgress : 0
  const currentCap = storedBook ? storedBook.book.capProgress : 0

  const [pageProgress, setPageProgress] = useState(currentPage)
  const [capProgress, setCapProgress] = useState(currentCap)

  const parseBookProgress = {
    book: {
      ISBN: book.book.ISBN,
      title: book.book.title,
      author: book.book.author.name,
      synopsis: book.book.synopsis,
      year: book.book.year,
      pages: book.book.pages,
      genre: book.book.genre,
      pageProgress,
      capProgress,
    },
  }

  const handleCloseClick = () => {
    setIsClosed(true)
    closeBookInfo()
  }

  const isLibraryPage = window.location.href.endsWith('library')
  const isHigher = book.book.title.length >= 25 ? 'gap-x-12' : ''
  const formatTitle = (title) => (title.length > 25 ? 'h-25' : 'h-13 mb-2')
  const isSaved = localStorage.getItem(book.book.ISBN) ? true : false

  return (
    <>
      <div
        id="backdrop-bg"
        className={`${isClosed ? 'hidden' : 'absolute'} flex flex-col justify-center items-center`}
      >
        <section
          className={`${isClosed ? 'hidden' : 'flex flex-row'} ${isHigher} text-soft-white shadow-xl shadow-black h-170 w-5xl bg-dark-blue p-6 rounded-xl relative`}
        >
          <div className="w-100 flex flex-col gap-2">
            <img
              src={book.book.cover}
              alt={book.book.title}
              className="rounded-xl w-90 h-130"
            />
            <p className="text-soft-white ml-2 mt-6 text-xl">
              Year: {book.book.year}
            </p>
            <p className="text-soft-white ml-2 text-xl">
              ISBN: {book.book.ISBN}
            </p>
          </div>

          <div className="flex flex-col mt-2">
            <div
              className={`${formatTitle(book.book.title)} w-full flex flex-row justify-between`}
            >
              <h1 className="text-soft-white font-extrabold text-4xl">
                {book.book.title}
              </h1>
              <button
                className="ml-24 cursor-pointer text-red-500 text-5xl font-bold rounded-2xl w-10 h-8 flex flex-col justify-center items-center"
                onClick={handleCloseClick}
              >
                x
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xl font-light italic">
                {book.book.author.name}
              </p>
              <p className="font-light text-xl max-w-130">
                {book.book.synopsis}
              </p>
              <p className="text-xl">
                <span className="font-medium">Pages: </span>
                {book.book.pages}
              </p>
              <Tag Text={book.book.genre} />
            </div>

            {isLibraryPage && (
              <>
                <PageProgress
                  bookProgress={parseBookProgress}
                  setPageProgress={setPageProgress}
                  setCapProgress={setCapProgress}
                />
                <ProgressBar
                  current={pageProgress}
                  limit={parseBookProgress.book.pages}
                />
              </>
            )}

            <div className="absolute bottom-8 right-8 flex flex-row gap-x-4">
              {isLibraryPage && (
                <SaveButton
                  ISBN={parseBookProgress.book.ISBN}
                  pageProgress={pageProgress}
                  capProgress={capProgress}
                />
              )}
              <BookButton
                Book={parseBookProgress}
                UpdateBooks={UpdateBooks}
                isSaved={isSaved}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
