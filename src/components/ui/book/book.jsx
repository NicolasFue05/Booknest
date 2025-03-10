import { useState } from 'react'
import BookInformation from './bookInfo'
import books from '../../../data/books'

export default function Book({ Title, Cover, Author }) {
  const [selectedBook, setSelectedBook] = useState(null)

  const handleClick = () => {
    const book = books.find((book) => book.book.title === Title)
    setSelectedBook(book)
  }

  const closeBookInfo = () => {
    setSelectedBook(null)
  }

  return (
    <div>
      <section
        onClick={handleClick}
        className="text-soft-gray max-h-120 hover:text-soft-white max-w-60 p-3 rounded-xl cursor-pointer bg-gray-blue hover:bg-blue-900 transition-all duration-300"
      >
        <img src={Cover} alt={Title} className="rounded-xl w-50 h-70" />
        <h3 className="font-bold text-2xl mt-4 truncate w-50">{Title}</h3>
        <p className="font-light">{Author}</p>
      </section>

      {selectedBook && (
        <BookInformation book={selectedBook} closeBookInfo={closeBookInfo} />
      )}
    </div>
  )
}
