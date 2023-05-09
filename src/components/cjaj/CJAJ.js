
import { Link } from "react-router-dom";
const CJAJ = (props) =>{

    return(
        <>
        <div className="judges-info">
                    <div className="judges-photos">
                      <img
                        src={props.img}
                        alt={"Hon'ble "+props.name}
                      />
                    </div>
                    <div className="description-txt">
                      <p>Hon'ble {props.name}</p>
                      <p>
                        {props.designation}
                        <span className="dob">(DoB.) {props.dob}</span>
                      </p>
                      <p>
                        <b>Term of Office:</b>
                        <span className="doa">(DoA) {props.doa}</span>
                        <span className="dor">(DoR) {props.dor}</span>
                      </p>
                      <p><Link to={props.url}>view profile</Link></p>
                    </div>
                  </div>
        </>
    )
}
export default CJAJ;