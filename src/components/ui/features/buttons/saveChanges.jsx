import UpdateIcon from '../../../../assets/icons/updateIcon'

const SaveButton = ({ ISBN, pageProgress, capProgress }) => {
  // Receive the complete book
  const { book } = JSON.parse(localStorage.getItem(ISBN))
  const parseBookProgress = {
    book: {
      ISBN: book.ISBN,
      title: book.title,
      author: book.author,
      synopsis: book.synopsis,
      year: book.year,
      pages: book.pages,
      genre: book.genre,
      pageProgress,
      capProgress,
    },
  }
  console.log(parseBookProgress)
  const handleChangeProgress = () => {
    localStorage.setItem(
      parseBookProgress.book.ISBN,
      JSON.stringify(parseBookProgress),
    )
    console.log(
      `Book Saved`,
      JSON.parse(localStorage.getItem(parseBookProgress.book.ISBN)),
    )
  }
  return (
    <button
      onClick={handleChangeProgress}
      className={`flex flex-row justify-center items-center p-5 gap-x-2 w-[130px] bg-emerald-500 max-w-[150px] font-semibold rounded cursor-pointer hover:bg-emerald-700 hover:transition-all hover:duration-300 hover:ease-in-out `}
    >
      Update
      <UpdateIcon />
    </button>
  )
}

export default SaveButton
