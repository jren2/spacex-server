import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Tab, Nav, Row, Col, Container } from 'react-bootstrap'

const Launch = () => {
  const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!){
      launch (flight_number:$flight_number) {
        flight_number
        mission_name
        launch_year
        launch_success
        launch_date_local
        details
        rocket {
          rocket_name
          rocket_id
          rocket_type
        }
        links {
          wikipedia
          presskit
          article_link
          video_link
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
            if (loading) return <div className="text-center my-5">loading data...</div>
            if (error) console.log(error)

            const { launch } = data
            const { flight_number, mission_name, launch_year, launch_success, launch_date_local, details, rocket: { rocket_id, rocket_name, rocket_type }, links: { wikipedia, presskit, article_link, video_link }
            } = launch

            return (
              <>
                <Container style={{ height: '30rem' }}>
                  <h1 className="text-center m-5">Mission: {mission_name}</h1>
                  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                      <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Launch Details</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">Rocket Details</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">Media</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col sm={9}>
                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <strong className={`${launch_success ? 'text-success' : 'text-danger'}`}>Launch {launch_success ? 'Successful' : 'Unsuccessful'}</strong>
                            <br></br>
                            <br></br>
                            <strong>Flight Number</strong>
                            <li style={{ paddingLeft: '20px', marginBottom: '20px' }}>{flight_number}</li>
                            <strong>Launch Year</strong>
                            <li style={{ paddingLeft: '20px', marginBottom: '20px' }}>{launch_year}</li>
                            {details &&
                              (
                                <>
                                  <strong>Details</strong>
                                  <li style={{ paddingLeft: '20px', marginBottom: '20px' }}>{details}</li>
                                </>
                              )
                            }
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <strong>Rocket ID</strong>
                            <li style={{ paddingLeft: '20px', marginBottom: '20px' }}>{rocket_id}</li>
                            <strong>Rocket Name</strong>
                            <li style={{ paddingLeft: '20px', marginBottom: '20px' }}>{rocket_name}</li>
                            <strong>Rocket Type</strong>
                            <li style={{ paddingLeft: '20px', marginBottom: '20px' }}>{rocket_type}</li>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            {wikipedia &&
                              (
                                <>
                                  <strong>Wikipedia</strong>
                                  <br></br>
                                  <a href={`${wikipedia}`} style={{ paddingLeft: '20px', marginBottom: '20px' }}>{wikipedia}</a>
                                  <br></br>
                                  <br></br>
                                </>
                              )
                            }
                            {presskit &&
                              (
                                <>
                                  <strong>Press Release</strong>
                                  <br></br>
                                  <a href={`${presskit}`} style={{ paddingLeft: '20px', marginBottom: '20px' }}>{presskit}</a>
                                  <br></br>
                                  <br></br>
                                </>
                              )
                            }
                            {article_link &&
                              (
                                <>
                                  <strong>Article</strong>
                                  <br></br>
                                  <a href={`${article_link}`} style={{ paddingLeft: '20px', marginBottom: '20px' }}>{article_link}</a>
                                  <br></br>
                                  <br></br>
                                </>
                              )
                            }
                            {video_link &&
                              (
                                <>
                                  <strong>Video Link</strong>
                                  <br></br>
                                  <a href={`${video_link}`} style={{ paddingLeft: '20px', marginBottom: '20px' }}>{video_link}</a>
                                  <br></br>
                                  <br></br>
                                </>
                              )
                            }
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Container>
                <Link to="/">
                  <div className="text-center">Back to all missions</div>
                </Link>
              </>
            )
          }
        }
      </Query>
    </>
  )
}

export default Launch
