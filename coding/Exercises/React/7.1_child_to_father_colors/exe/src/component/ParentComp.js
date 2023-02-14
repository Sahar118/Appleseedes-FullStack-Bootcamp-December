import CustomButton from "./CustomButton";
// import React, { useState } from 'react'


// export default function ChangeTitle() {

// const [color, setColor] = useState(newColor)

// const whichColor = () => {
//     setColor('color')
//     console.log(color);
// }

//     const colors = ['blue', 'red', 'yellow'];

//     return (
//         <>
//             {colors.map((e) => {
//                 return (
//                     <CustomButton
//                         colors={e.colors} />
//                 )
//             })}

//             <div> The Color Selected is: {colors[0]}</div>
//         </>

//     )
// }

export default function ChangeTitle() {
    const colors = ['blue', 'red', 'yellow'];
    return (
        <div className="mother-container">
            <h1> A Tale of Five Balloons </h1>

            {colors.map((e) => {
                return (
                    <CustomButton
                        color={e}
                    />
                )
            })}</div>


    )
}