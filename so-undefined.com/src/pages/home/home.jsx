// import logo from '../../assets/logo.svg'
import NavBar from '../../components/navbar/NavBar'
import TrackerGroup from '../../components/trackergroup/TrackerGroup'
import UserFrame from '../../components/userframe/UserFrame'
import './home.scss'

function Home() {

  return (
    <div id="home">
      <NavBar></NavBar>
      <div className="body">
        <div className="content">
          <UserFrame></UserFrame>
          <TrackerGroup></TrackerGroup>
        </div>
      </div>
    </div>
  )
}

export default Home
