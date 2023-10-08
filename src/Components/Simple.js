import colors from "colors"
import { useEffect } from "react";

function Simple({ colorIndex, setColorIndex, setBgColor }) {

    function changeSimpleColor() {
        setBgColor(colors[colorIndex])
        const nextColor = (colorIndex + 1) % colors.length // bgColor to store the color when changing components
        setColorIndex(nextColor)
        setBgColor(colors[nextColor])
    }

    useEffect(() => {
        setBgColor(colors[colorIndex])
    }, [])

    return (
        <>
            <span>Background color:</span>
            <span>{colors[colorIndex]}</span>
            <button onClick={changeSimpleColor}>Next</button>
        </>
    )
}

export default Simple