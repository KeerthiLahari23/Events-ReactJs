// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {getActiveRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="no-active-event-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderYetToRegister = () => (
    <div className="registration-status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="registration-status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationClosedView = () => (
    <div className="registration-status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
        className="register-closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p> Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const renderActiveRegistration = () => {
    switch (getActiveRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegister()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationClosed:
        return renderRegistrationClosedView()
      default:
        return renderNoActiveEventView()
    }
  }
  return (
    <div className="active-event-registration-details">
      {renderActiveRegistration()}
    </div>
  )
}
export default ActiveEventRegistrationDetails
