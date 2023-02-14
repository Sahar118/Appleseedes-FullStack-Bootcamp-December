
export default function Btn(props) {
    return (
        <>
            <button
                style={{
                    backgroundColor: props.color,
                    width: '170px',
                    height: '25px'
                }} onClick={() => props.callBackFun(props.color)}>{props.color}</button>


        </>
    )
}




