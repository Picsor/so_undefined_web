import logo from '../../assets/logo.svg'
import './navbar.scss'
import SyncIcon from '../../icons/SyncIcon'

function NavBar() {

  return (
    <div id="navbar">
        <div className="container">
            <div className="sub-container">
                <div className="left sub-div">
                    <img src={logo}/>
                    <label className="title">Dashboard</label>
                </div>
                <div className="right sub-div">
                    <div className="search-bar">
                        <div className="icon"></div>
                        <input type='text' placeholder='Search...'/>
                    </div>

                    <div className="sync-button">
                        <SyncIcon color="#50505F"></SyncIcon>
                    </div>

                    <div className="profile-button">
                        <div className="icon">M</div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default NavBar
