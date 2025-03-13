import Book from '../../components/ui/book/book'
import LibraryTitle from '../../components/ui/features/titles/libraryTitle'
import books from '../../data/books'

export default function LibraryPage() {
  const savedBooks = books.filter((book) => {
    const savedBook = localStorage.getItem(book.book.ISBN)

    if (savedBook) {
      const parsedBook = JSON.parse(savedBook)

      return parsedBook.book.ISBN === book.book.ISBN
    }

    return false
  })
  return (
    <section className="library">
      <LibraryTitle />
      <div className="ml-5 flex flex-wrap gap-5 ">
        {savedBooks.length > 0 ? (
          savedBooks.map((bookItem) => (
            <Book
              key={bookItem.book.ISBN}
              Title={bookItem.book.title}
              Cover={bookItem.book.cover}
              Author={bookItem.book.author.name}
            />
          ))
        ) : (
          <p>No saved books found</p>
        )}
      </div>
    </section>
  )
}
