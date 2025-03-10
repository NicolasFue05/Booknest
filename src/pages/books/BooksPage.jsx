import books from '../../data/books.js'
import Book from '../../components/ui/book/book.jsx'

export default function BooksPage() {
  // get all the books from books

  return (
    <section
      id="books"
      className="mt-10 ml-5 mb-20 flex gap-5 flex-wrap max-w-full h-[100vh] overflow-y-auto scrollbar-none"
    >
      {books.map((book) => (
        <Book
          key={book.book.ISBN}
          Title={book.book.title}
          Cover={book.book.cover}
          Author={book.book.author.name}
        />
      ))}
    </section>
  )
}
