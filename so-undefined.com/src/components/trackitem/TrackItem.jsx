import './trackitem.scss'
import bg from "../../assets/encounter_bg/gorse2.png";
import encounter from "../../assets/encounters/gorseval.png"
import portrait from "../../assets/portraits/legendary.png"

function TrackItem() {
    return (
        <div id="track-item">
            <div className="frame-container-ti">
                <div className="background-ti solid"/>
                <img src={bg} className="background-ti blur"/>
                <div className="container-ti">
                    <div className="icon-ti">
                        <img className="encounter" src={encounter} />
                        <img className="portrait" src={portrait} />
                    </div>
                    <div className="number">23</div>
                </div>

            </div>
        </div>
    )
}

export default TrackItem;