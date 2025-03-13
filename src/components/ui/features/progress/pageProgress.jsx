import Progress from './progressInput'

export default function PageProgress({
  bookProgress,
  setPageProgress,
  setCapProgress,
}) {
  return (
    <div className="flex flex-col gap-y-2 mt-2">
      <Progress
        isPage={true}
        bookProgress={bookProgress}
        setProgress={setPageProgress}
      />
      <Progress bookProgress={bookProgress} setProgress={setCapProgress} />
    </div>
  )
}
