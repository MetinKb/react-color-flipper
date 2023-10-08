import { useEffect } from "react"

const hexValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

function Hex({ hexColor, setHexColor, setBgColor }) {

    useEffect(() => {
        setBgColor(hexColor)
    }, [])

    function createHexColor() {
        const randomNumbers = []
        for (let i = 0; i < 6; i++) {
            randomNumbers.push(getRandomNumber())
        }

        const hexCode =
            "#" + randomNumbers.map((number) => hexValues[number]).join("")
        setHexColor(hexCode)
        setBgColor(hexCode)
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * hexValues.length)
    }

    return (
        <>
            <span>Background color:</span>
            <span>{hexColor}</span>
            <button onClick={createHexColor}>Next</button>
        </>
    )
}

export default Hex