import Balloons from '../BallonComp/Ballon'

export default function Child(props) {
    return (
        <div className="child-container">
            <h3 className="child-names">{props.name}</h3>

            <Balloons color={props.color}></Balloons>


        </div>
    )
}