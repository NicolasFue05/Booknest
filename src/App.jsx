import './App.css'
import { Routes, Route } from 'react-router-dom'
import LeftTopPanel from './components/ui/panel/leftPanel'
import Home from './pages/home/HomePage'
import Bar from './components/ui/features/bar'
import BooksPage from './pages/books/BooksPage'

function App() {
  return (
    <div className="flex flex-row gap-1">
      <LeftTopPanel />
      <Bar isSeparator={true} />
      <Routes>
        {/* <Switch> */}
        <Route path="/" index element={<Home />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/library" element={'library'} />
        <Route path="/about" element={'about'} />
        {/* </Switch> */}
      </Routes>
    </div>
  )
}

export default App
