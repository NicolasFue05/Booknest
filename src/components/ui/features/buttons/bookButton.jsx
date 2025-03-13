import SaveIcon from '../../../../assets/icons/saveIcon'
import RemoveIcon from '../../../../assets/icons/removeIcon'
import { useState } from 'react'

const BookButton = ({ Book, isSaved = false }) => {
  const [bookSaved, setBookSaved] = useState(isSaved)

  const buttonText = bookSaved ? 'Remove' : 'Save'
  const parseBookProgress = {
    book: {
      ISBN: Book.book.ISBN,
      title: Book.book.title,
      author: Book.book.author,
      synopsis: Book.book.synopsis,
      year: Book.book.year,
      pages: Book.book.pages,
      genre: Book.book.genre,
      pageProgress: 0,
      capProgress: 0,
    },
  }
  const handleSaveBook = () => {
    if (!bookSaved) {
      localStorage.setItem(Book.book.ISBN, JSON.stringify(parseBookProgress))
      setBookSaved(true)
    } else {
      localStorage.removeItem(Book.book.ISBN)
      setBookSaved(false)
    }
  }

  let bookSavedStyles = bookSaved
    ? 'bg-soft-red hover:bg-red-700 gap-x-2 hover:text-soft-gray'
    : 'bg-soft-blue hover:bg-ligth-blue text-black hover:text-gray-800 gap-x-5'

  return (
    <button
      onClick={handleSaveBook}
      className={`flex flex-row justify-center items-center ${bookSavedStyles} p-5 max-w-[130px] font-semibold rounded cursor-pointer hover:transition-all hover:duration-100 hover:ease-in-out`}
    >
      {buttonText}
      {buttonText === 'Save' ? <SaveIcon /> : <RemoveIcon />}
    </button>
  )
}

export default BookButton
