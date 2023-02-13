
// import CardInfo from './CardInfo'
export default function Card(props) {
    return (
        <div className="container">
            <div className="card-container">
                <img src={props.image} height="200" width="300" />
                <div className="title">
                    {props.title}
                </div>
                <div url={props.url}></div>
                <div className="description">
                    {props.description}
                </div>


                <div className="link-container">
                    <a className="link1" href={props.link1.url} target='_blank'>{props.link1.p}</a>
                    <a className="link2" href={props.link2.url} target='_blank'>{props.link2.p}</a>
                </div>

            </div>
        </div >
    );
}