import { useState } from 'react'

export default function Progress({
  isPage = false,
  bookProgress = {},
  setProgress,
}) {
  const { book } = JSON.parse(localStorage.getItem(bookProgress.book.ISBN))

  const currentProgress = isPage ? book.pageProgress : book.capProgress
  const [progress, setLocalProgress] = useState(currentProgress)

  const updateProgress = (value) => {
    setLocalProgress(value)
    setProgress(value) // Update the state in `BookInformation`
  }

  const increaseProgress = () => {
    updateProgress(progress + 1)
  }

  const decreaseProgress = () => {
    updateProgress(progress > 0 ? progress - 1 : 0)
  }

  return (
    <div className="flex flex-row items-center mt-2 gap-x-5">
      <div className="w-40">
        <span className="italic font-bold mr-2">
          Current {isPage ? 'Page' : 'Cap'}:
        </span>
        {progress}
      </div>

      <div className="flex font-bold h-8 flex-row justify-between text-xl items-center bg-soft-white text-black rounded-[10px]">
        <button
          onClick={decreaseProgress}
          className="rounded-l-[10px] cursor-pointer h-8 flex flex-col justify-center items-center hover:bg-soft-gray p-4 transform hover:transition-all hover:duration-500"
        >
          -
        </button>
        <span id="number-input" className="font-bold ml-3 mr-3">
          {progress}
        </span>
        <button
          onClick={increaseProgress}
          className="rounded-r-[10px] cursor-pointer h-8 flex flex-col justify-center items-center hover:bg-soft-gray p-4 transform hover:transition-all hover:duration-500"
        >
          +
        </button>
      </div>
    </div>
  )
}
