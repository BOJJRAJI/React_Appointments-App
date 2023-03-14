import {Component} from 'react'

import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {inputTitle: '', inputDate: '', appointmentLists: []}

  getInputTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  getInputDate = event => {
    this.setState({inputDate: event.target.value})
  }

  addAppointment = event => {
    event.preventDefault()
    const {inputTitle, inputDate} = this.state
    const newAppointment = {
      id: v4(),
      name: inputTitle,
      date: inputDate,
      isLiked: false,
    }
    this.setState(prevState => ({
      appointmentLists: [...prevState.appointmentLists, newAppointment],
      inputTitle: '',
      inputDate: '',
    }))
  }

  render() {
    const {appointmentLists} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Add Appointment</h1>
          <div className="inputs-container">
            <form className="form" onSubmit={this.addAppointment}>
              <label className="input-label" htmlFor="input">
                TITLE
              </label>
              <input
                className="input-element"
                type="text"
                id="input"
                placeholder="Title"
                onChange={this.getInputTitle}
              />
              <label className="date-label" htmlFor="input">
                DATE
              </label>
              <input
                type="date"
                className="date-input"
                id="date"
                placeholder="Date"
                onChange={this.getInputDate}
              />
              <button className="button" type="submit">
                Add
              </button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt=" appointments"
            />
          </div>
          <hr className="line" />
          <div className="appointmentDetails">
            <h1 className="heading-appointment">Appointments</h1>
            <button className="stared-button" type="button">
              Stared
            </button>
          </div>
          <ul className="listed-appointments">
            {appointmentLists.map(eachAppointment => (
              <AppointmentItem
                key={eachAppointment.id}
                appointmentDetails={eachAppointment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
