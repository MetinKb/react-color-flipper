import styles from "Assets/Main.module.css"
import { Routes, Route } from "react-router-dom"
import Simple from "Components/Simple"
import Hex from "Components/Hex"
import { useState } from "react"

function Main() {
    const [bgColor, setBgColor] = useState("")
    const [colorIndex, setColorIndex] = useState(0)
    const [hexColor, setHexColor] = useState("#ffffff") // hexColor to store the Hex color code when changing components

    return (
        <main style={{ backgroundColor: bgColor }}>
            <div className={styles.routesContainer}>
                <Routes>
                    <Route path="/" element={
                        <Simple colorIndex={colorIndex} setColorIndex={setColorIndex} setBgColor={setBgColor}
                        />} />
                    <Route path="/hex" element={
                        <Hex hexColor={hexColor} setHexColor={setHexColor} setBgColor={setBgColor}
                        />} />
                </Routes>
            </div>
        </main>
    )
}

export default Main