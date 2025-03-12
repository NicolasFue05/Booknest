import { useState } from 'react'
import BookButton from '../features/buttons/bookButton'
import Tag from '../features/tags/tag'
import PageProgress from '../features/progress/currentPage'

export default function BookInformation({ book, closeBookInfo }) {
  const [isClosed, setIsClosed] = useState(false)

  const parseBookProgress = {
    book: {
      ISBN: book.book.ISBN,
      title: book.book.title,
      author: book.book.author.name,
      synopsis: book.book.synopsis,
      year: book.book.year,
      pages: book.book.pages,
      genre: book.book.genre,
      pageProgress: 0,
      capProgress: 0,
    },
  }

  console.log(parseBookProgress)

  const handleCloseClick = () => {
    setIsClosed(true)
    closeBookInfo()
  }

  // library
  const isLibraryPage = window.location.href.endsWith('library')
  console.log(isLibraryPage)

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

            {isLibraryPage && <PageProgress bookProgress={parseBookProgress} />}

            {/* Mover el botón a la parte inferior derecha */}
            <div className="absolute bottom-8 right-8">
              <BookButton Book={book} isSaved={isSaved} />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
