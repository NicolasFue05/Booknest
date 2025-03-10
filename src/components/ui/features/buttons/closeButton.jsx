import CloseIcon from '../../../../assets/closeIcon.jsx'

const CloseButton = ({ HandleClick }) => {
  return (
    <button onClick={HandleClick} className="close-button">
      <CloseIcon />
    </button>
  )
}

export default CloseButton
