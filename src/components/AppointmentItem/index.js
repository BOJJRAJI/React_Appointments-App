import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails} = props
  const {name, date, isLiked} = appointmentDetails

  const starUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const k = format(date, 'dd MMMM yyyy, EEEE')

  return (
    <li className="list-item">
      <div className="details-container">
        <h1 className="text">{name}</h1>
        <img className="star" src={starUrl} alt="star" />
      </div>
      <p className="date-content">{k}</p>
    </li>
  )
}

export default AppointmentItem
