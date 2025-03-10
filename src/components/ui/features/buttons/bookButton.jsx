import SaveIcon from '../../../../assets/icons/saveIcon'
import RemoveIcon from '../../../../assets/icons/removeIcon'
import { useState } from 'react'

const BookButton = ({ Book, isSaved = false }) => {
  const [bookSaved, setBookSaved] = useState(isSaved)

  const buttonText = bookSaved ? 'Remove' : 'Save'
  const handleSaveBook = () => {
    if (!bookSaved) {
      localStorage.setItem(Book.book.ISBN, JSON.stringify(Book))
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
