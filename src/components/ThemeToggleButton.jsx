import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import useTheme from "../hooks/useTheme"

const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme()
  return <button onClick={toggleTheme}>Toggle Theme</button>
}

export default ThemeToggleButton
