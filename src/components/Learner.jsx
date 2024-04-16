import Score from "./Score"

function Learner(props) {
    return (
        <div className="'learner-container">
            <div className="learner-info">

                <b> {props.data.name}</b>
                <p>{props.data.bio}</p>

            </div>
            <Score scores={props.data.scores} />

        </div>
    )
}

export default Learner