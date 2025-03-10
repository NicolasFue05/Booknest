import RecommendedBooksTitle from '../features/titles/recommendedBooks'
import books from '../../../data/books.js'
import Book from './book.jsx'

import { useState, useEffect } from 'react'

export default function RecommendedBooks() {
  const recommendedTitles = [
    'The Prince',
    'The Kybalion',
    'The Raven',
    "The Emperor's New Mind",
    'The Wisdom of Psychopaths',
  ]

  const treeRecommendedBooks = books.filter((book) => {
    return recommendedTitles.includes(book.book.title)
  })

  const [booksToShow, setBooksToShow] = useState(treeRecommendedBooks.length)

  const handleResize = () => {
    if (window.innerWidth < 1600) {
      setBooksToShow(4)
    } else {
      setBooksToShow(treeRecommendedBooks.length)
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
    <section className="ml-5 w-300 ">
      <RecommendedBooksTitle />
      <ul className="flex gap-5">
        {/* Mostrar solo los primeros `booksToShow` libros */}
        {treeRecommendedBooks.slice(0, booksToShow).map((book) => {
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
