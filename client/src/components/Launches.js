import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LaunchItem from './LaunchItem'

const Launches = () => {
  const LAUNCHES_QUERY = gql`
    query LaunchesQuery{
      launches {
        flight_number
        mission_name
        launch_date_local
        launch_success
      }
    }
  `

  return (
    <>
      <div>
        Launches
      </div>
      <Query query={LAUNCHES_QUERY}>
        {
          ({ loading, error, data }) => {
            if (loading) return <div>loading</div>
            if (error) console.log(error)

            return (
              data.launches.map(launch => (
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
