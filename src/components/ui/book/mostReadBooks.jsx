import { useEffect, useState } from 'react'
import books from '../../../data/books'
import Book from './book'
import MostReadBooksTitle from '../features/titles/mostReadBooksTitle'

export default function MostReadBooks() {
  const mostReadsTitle = [
    'The Great Gatsby',
    'To Kill a Mockingbird',
    '1984',
    'Pride and Prejudice',
    'The Catcher in the Rye',
  ]

  const mostReadBooks = books.filter((book) => {
    return mostReadsTitle.includes(book.book.title)
  })

  const [booksToShow, setBooksToShow] = useState(mostReadBooks.length)

  const handleResize = () => {
    if (window.innerWidth < 1600) {
      setBooksToShow(4)
    } else {
      setBooksToShow(mostReadBooks.length)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <section className="ml-5 w-300 h-500">
      <MostReadBooksTitle />
      <ul className="flex gap-5">
        {/* Mostrar solo los primeros `booksToShow` libros */}
        {mostReadBooks.slice(0, booksToShow).map((book) => {
          return (
            <Book
              key={book.book.ISBN}
              Title={book.book.title}
              Cover={book.book.cover}
              Author={book.book.author.name}
            />
          )
        })}
      </ul>
    </section>
  )
}
