import './userframe.scss'
import pfp from "../../assets/waw.png";

function UserFrame() {
    return (
        <div id="user-frame">
            <div className="frame-container">
                <img src={pfp} className="background"/>
                <div className="container">
                    <img src={pfp} className="profile-picture items"/>

                    <div className="infos items">
                        <label className="username">Username</label>
                        <label className="id">01989832</label>

                        <label className="plan">Free</label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserFrame;