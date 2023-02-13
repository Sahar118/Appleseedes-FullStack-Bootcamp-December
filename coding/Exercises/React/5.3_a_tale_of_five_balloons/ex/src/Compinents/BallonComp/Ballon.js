

export default function Balloons(props) {
    return (
        <div className="ballon-container">

            <div className="balloon"
                style={{
                    backgroundColor: props.color,
                    width: '50px',
                    height: '50px',
                    borderRadius: '50px'
                }}

            />{props.Children}
        </div>)
}