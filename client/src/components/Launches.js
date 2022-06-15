
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LaunchItem from './LaunchItem'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const Launches = () => {
  const LAUNCHES_QUERY = gql`
    query LaunchesQuery{
      launches {
        flight_number
        mission_name
        launch_date_local
        launch_success
        details
      }
    }
  `

  return (
    <>
      <h1 className="w-full mt-3 mb-5 text-center">
        SpaceX Launches
      </h1>
      <Query query={LAUNCHES_QUERY}>
        {
          ({ loading, error, data }) => {
            if (loading) return <div className="text-center">loading data...</div>
            if (error) console.log(error)

            return (
              data.launches.slice(0).reverse().map(launch => (
                <>
                  <LaunchItem key={launch.flight_id} launch={launch} />
                </>
              ))
            )
          }
        }
      </Query>
    </>
  )
}

export default Launches
