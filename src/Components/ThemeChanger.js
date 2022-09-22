import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

function ThemeChanger() {

    const { theme, setTheme } = useContext(ThemeContext);

    function handleClick() {

        if (theme === "Light") {
            setTheme("Dark");
        } else {
            setTheme("Light");
        }
    }

    return <div>
        <button onClick={handleClick}>Tema Değiştir</button>
    </div>
}
export default ThemeChanger;