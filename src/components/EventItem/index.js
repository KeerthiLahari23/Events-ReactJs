// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveId} = props
  const {imageUrl, name, location, id} = eventDetails
  const onClickEvent = () => {
    setActiveId(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
