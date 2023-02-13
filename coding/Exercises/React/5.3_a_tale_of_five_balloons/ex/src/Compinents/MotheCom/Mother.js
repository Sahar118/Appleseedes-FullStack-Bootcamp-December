
import Child from '../ChildComp/Child'


export default function Mother() {
    const kids = [
        { name: 'Ori', color: 'red' },
        { name: 'Ron', color: 'blue' },
        { name: 'Sigalit', color: 'green' },
        { name: 'Ruti', color: 'yellow' },
        { name: 'Alon', color: 'purple' },
    ]
    return (
        <div className="mother-container">
            <h1> A Tale of Five Balloons</h1>

            {kids.map((e) => {
                return (
                    <Child
                        name={e.name}
                        color={e.color}
                    />
                )
            })}</div>


    )
}