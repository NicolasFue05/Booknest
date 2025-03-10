import BookIcon from '../../../../assets/icons/bookIcon'
export default function LibraryTitle(){
  return (
    <div className='flex flex-row gap-x-2 mt-10 mb-5 text-6xl'>
      <BookIcon />
      <span className='text-soft-white '>My Library</span>
    </div>
  )
}
