import './trackergroup.scss'
import bg from "../../assets/bg_raid.png";
import TrackItem from '../trackitem/TrackItem';

function TrackerGroup() {
    return (
        <div id="tracker-group">
            <div className="frame-container">
                <img src={bg} className="background"/>
                <div className="container-tg">
                    <div className="title items">Tracker</div>
                    <div className="track-item-container items">
                        <TrackItem/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackerGroup;