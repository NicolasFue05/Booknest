const books = [
  {
    book: {
      title: 'The Prince',
      pages: 140,
      genre: 'Political Philosophy',
      cover:
        'https://images-na.ssl-images-amazon.com/images/I/31afbjnAsSL._UL1200_.jpg',
      synopsis:
        'Treatise on political power and leadership strategies in Renaissance Italy.',
      year: 1532,
      ISBN: '978-0486272740',
      author: {
        name: 'Niccolò Machiavelli',
      },
    },
  },
  {
    book: {
      title: 'The Kybalion',
      pages: 224,
      genre: 'Esoteric Philosophy',
      cover:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1615236025i/57350030.jpg',
      synopsis:
        'Explanation of seven hermetic principles governing reality and consciousness.',
      year: 1908,
      ISBN: '978-0875160464',
      author: {
        name: 'Three Initiates',
      },
    },
  },
  {
    book: {
      title: 'The Raven',
      pages: 64,
      genre: 'Gothic Poetry',
      cover: 'https://m.media-amazon.com/images/I/61bX+AbiCFL._SL1500_.jpg',
      synopsis:
        "A man's descent into madness haunted by a talking raven symbolizing loss.",
      year: 1845,
      ISBN: '978-1503261155',
      author: {
        name: 'Edgar Allan Poe',
      },
    },
  },
  {
    book: {
      title: "The Emperor's New Mind",
      pages: 640,
      genre: 'Non-fiction Science',
      cover:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347652000i/179744.jpg',
      synopsis:
        'Exploration of the philosophical implications of quantum mechanics and consciousness.',
      year: 1989,
      ISBN: '978-0198784920',
      author: {
        name: 'Roger Penrose',
      },
    },
  },
  {
    book: {
      title: 'The Wisdom of Psychopaths',
      pages: 288,
      genre: 'Non-fiction Science',
      cover: 'https://m.media-amazon.com/images/I/71K8GcDErCL._SY385_.jpg',
      synopsis:
        'Exploration of the philosophical implications of quantum mechanics and consciousness.',
      year: 1989,
      ISBN: '978-0199384570',
      author: {
        name: 'Kevin Dutton',
      },
    },
  },
  {
    book: {
      title: 'The Great Gatsby',
      pages: 180,
      genre: 'Classic Literature',
      cover:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/220px-The_Great_Gatsby_Cover_1925_Retouched.jpg',
      synopsis:
        'A critique of the American Dream, told through the tragic story of Jay Gatsby.',
      year: 1925,
      ISBN: '978-073094855',
      author: {
        name: 'F. Scott Fitzgerald',
      },
    },
  },
  {
    book: {
      title: 'To Kill a Mockingbird',
      pages: 281,
      genre: 'Fiction',
      cover:
        'https://images.cdn1.buscalibre.com/fit-in/360x360/f6/b6/f6b6a354bbc07e0791081e6e988e0efe.jpg',
      synopsis:
        'A story of racial injustice and childhood innocence set in the American South during the 1930s.',
      year: 1960,
      ISBN: '978-006123154',
      author: {
        name: 'Harper Lee',
      },
    },
  },
  {
    book: {
      title: '1984',
      pages: 328,
      genre: 'Dystopian Fiction',
      cover: 'https://images.booksense.com/images/913/287/9786257287913.jpg',
      synopsis:
        'A chilling dystopian novel set in a totalitarian society under the surveillance of Big Brother.',
      year: 1949,
      ISBN: '978-04515205762',
      author: {
        name: 'George Orwell',
      },
    },
  },
  {
    book: {
      title: 'Pride and Prejudice',
      pages: 432,
      genre: 'Romance',
      cover:
        'https://image.cdn1.buscalibre.com/5b57313ef4df7312578b4569.__RS360x360__.jpg',
      synopsis:
        'A romantic novel about Elizabeth Bennet and her evolving relationship with the wealthy and aloof Mr. Darcy.',
      year: 1813,
      ISBN: '978-1503299275',
      author: {
        name: 'Jane Austen',
      },
    },
  },
  {
    book: {
      title: 'The Catcher in the Rye',
      pages: 277,
      genre: 'Fiction',
      cover: 'https://www.tornamesa.co/imagenes/9780316/978031676948.GIF',
      synopsis:
        'The story of Holden Caulfield, a troubled teenager struggling with the complexities of adulthood.',
      year: 1951,
      ISBN: '978-0316729836',
      author: {
        name: 'J.D. Salinger',
      },
    },
  },
  {
    book: {
      title: 'The Lord of the Rings',
      pages: 1200,
      genre: 'Fantasy',
      cover:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
      synopsis: 'An epic adventure in a fantasy world called Middle-earth.',
      year: 1954,
      ISBN: '978-0618640157',
      author: {
        name: 'J.R.R. Tolkien',
      },
    },
  },
  {
    book: {
      title: 'A Game of Thrones',
      pages: 694,
      genre: 'Fantasy',
      cover:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg',
      synopsis:
        'In a kingdom where seasons last for years, an epic battle for the throne unfolds.',
      year: 1996,
      ISBN: '978-0553103540',
      author: {
        name: 'George R. R. Martin',
      },
    },
  },
  {
    book: {
      title: "Harry Potter and the Sorcerer's Stone",
      pages: 223,
      genre: 'Fantasy',
      cover:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg',
      synopsis:
        'A boy discovers he is a wizard and begins an adventure at a school of magic.',
      year: 1997,
      ISBN: '978-0747532699',
      author: {
        name: 'J.K. Rowling',
      },
    },
  },
  {
    book: {
      title: 'Zombie Apocalypse',
      pages: 444,
      genre: 'Zombies',
      cover:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1422626176i/24762432.jpg',
      synopsis:
        'A man from Galicia stays home during the zombie apocalypse and almost saves the world.',
      year: 2001,
      ISBN: '978-4444532611',
      author: {
        name: 'Manel Loreiro',
      },
    },
  },
  {
    book: {
      title: 'Dune',
      pages: 412,
      genre: 'Science Fiction',
      cover:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg',
      synopsis:
        'On the inhospitable desert planet of Arrakis, a great political and family intrigue unfolds.',
      year: 1965,
      ISBN: '978-0441172719',
      author: {
        name: 'Frank Herbert',
      },
    },
  },
  {
    book: {
      title: "The Hitchhiker's Guide to the Galaxy",
      pages: 216,
      genre: 'Science Fiction',
      cover:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653311117i/6691227.jpg',
      synopsis: 'An absurd and comedic journey through space, with towels.',
      year: 1979,
      ISBN: '978-0345391803',
      author: {
        name: 'Douglas Adams',
      },
    },
  },
  {
    book: {
      title: 'Neuromancer',
      pages: 271,
      genre: 'Science Fiction',
      cover:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554437249i/6088007.jpg',
      synopsis:
        'A prophetic vision of cyber-reality and artificial intelligence.',
      year: 1984,
      ISBN: '978-0441569595',
      author: {
        name: 'William Gibson',
      },
    },
  },
  {
    book: {
      title: 'Fahrenheit 451',
      pages: 249,
      genre: 'Science Fiction',
      cover:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg',
      synopsis:
        "A future society where books are banned and 'firemen' burn any books they find.",
      year: 1953,
      ISBN: '978-1451673319',
      author: {
        name: 'Ray Bradbury',
      },
    },
  },
  {
    book: {
      title: 'The Shining',
      pages: 688,
      genre: 'Horror',
      cover:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641398308i/60038757.jpg',
      synopsis:
        'A family moves to an isolated hotel for the winter where a sinister presence influences the father towards violence.',
      year: 1977,
      ISBN: '978-0307743657',
      author: {
        name: 'Stephen King',
      },
    },
  },
]

export default books
