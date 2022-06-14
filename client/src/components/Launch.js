import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Launch = () => {
  const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!){
      launch (flight_number:$flight_number) {
        flight_number
        mission_name
        launch_year
        launch_success
        launch_date_local
        rocket {
          rocket_name
          rocket_id
          rocket_type
        }
      }
    }
  `

  let { flight_number } = useParams()
  flight_number = parseInt(flight_number)

  return (
    <>
      <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
        {
          ({ loading, error, data }) => {
            if (loading) return <div>loading</div>
            if (error) console.log(error)

            const { launch } = data
            const { flight_number, mission_name, launch_year, launch_success, launch_date_local, rocket: { rocket_id, rocket_name, rocket_type } } = launch

            return (
              <>
                <div>Mission: {mission_name}</div>
                <div>Launch Details:</div>
                <ul>
                  <li>Flight Number: {flight_number}</li>
                  <li>Mission Name: {mission_name}</li>
                  <li>Launch Year: {launch_year}</li>
                  <li >Launch Success? <span className={`${launch_success ? 'text-success' : 'text-danger'}`}>{launch_success ? 'yes' : 'no'}</span></li>
                </ul>
                <br></br>
                <div>Rocket Details:</div>
                <ul>
                  <li>Rocket ID: {rocket_id}</li>
                  <li>Rocket Name: {rocket_name}</li>
                  <li>Rocket Type: {rocket_type}</li>
                </ul>
                <Link to="/">Back to all missions</Link>
              </>
            )
          }
        }
      </Query>
    </>
  )
}

export default Launch
