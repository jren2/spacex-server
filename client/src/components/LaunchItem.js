import { Link } from 'react-router-dom'

const LaunchItem = ({ launch }) => {
  const { flight_number, mission_name, launch_date_local } = launch

  return (
    <>
      <div>{flight_number}</div>
      <div>{mission_name}</div>
      <div>{launch_date_local}</div>
      <Link to={`/launch/${flight_number}`}>See Details</Link>
      <br></br>
      <br></br>
    </>
  )
}

export default LaunchItem
