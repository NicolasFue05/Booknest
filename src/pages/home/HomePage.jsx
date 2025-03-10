import MostReadBooks from '../../components/ui/book/mostReadBooks'
import RecommendedBooks from '../../components/ui/book/recommendedBooks'

export default function Home() {
  return (
    <div id="home" className="max-h-300 overflow-y-auto scroll-hide">
      <RecommendedBooks />
      <MostReadBooks />
    </div>
  )
}
