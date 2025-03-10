import Book from '../../components/ui/book/book'
import LibraryTitle from '../../components/ui/features/titles/libraryTitle'
import books from '../../data/books'

export default function LibraryPage() {
  // Obtener todos los libros guardados en el localStorage
  const savedBooks = books.filter((book) => {
    // Obtener el valor del ISBN guardado en localStorage
    const savedBook = localStorage.getItem(book.book.ISBN)

    if (savedBook) {
      // Parsear el libro guardado desde el JSON string
      const parsedBook = JSON.parse(savedBook)

      // Comparar el ISBN guardado con el del libro en la lista
      console.log(parsedBook.book.ISBN === book.book.ISBN)
      return parsedBook.book.ISBN === book.book.ISBN
    }

    return false
  })
  console.log(savedBooks)

  return (
    <section className="library">
      <LibraryTitle />
      <div className="flex flex-wrap gap-5 ">
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
          <p>No saved books found</p> // Mensaje si no hay libros guardados
        )}
      </div>
    </section>
  )
}
