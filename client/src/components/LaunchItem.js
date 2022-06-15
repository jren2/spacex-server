import { Link } from 'react-router-dom'
import { Card, Container, Button } from 'react-bootstrap'

const LaunchItem = ({ launch }) => {
  const { flight_number, mission_name, launch_date_local, details, launch_success } = launch

  const year = launch_date_local.slice(0, 4)
  let month = launch_date_local.slice(5, 7)
  const day = launch_date_local.slice(8, 10)
  const time = launch_date_local.slice(10)

  switch (month) {
    case "01":
      month = "January"
      break
    case "02":
      month = "February"
      break
    case "03":
      month = "March"
      break
    case "04":
      month = "April"
      break
    case "05":
      month = "May"
      break
    case "06":
      month = "June"
      break
    case "07":
      month = "July"
      break
    case "08":
      month = "August"
      break
    case "09":
      month = "September"
      break
    case "10":
      month = "October"
      break
    case "11":
      month = "November"
      break
    case "12":
      month = "December"
      break
    default:
      break
  }

  return (
    <>
      <Container className="d-flex justify-content-center">
        <Card className="shadow" style={{ width: '100rem' }}>
          <Card.Body>
            <Card.Title className={`${launch_success ? 'text-success' : 'text-danger'}`}>Mission: {mission_name}</Card.Title>
            <Card.Text>
              {day} {month} {year}&nbsp; @ &nbsp;{time}
            </Card.Text>
            <Card.Text>
              {details}
            </Card.Text>
            <Link to={`/launch/${flight_number}`}>
              <Button variant="info">
                See Details
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
      <br></br>
      <br></br>
    </>
  )
}

export default LaunchItem
