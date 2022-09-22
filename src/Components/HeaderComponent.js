import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

function HeaderComponent() {
    const { theme } = useContext(ThemeContext);

    return <div>Temamız : {theme}</div>
}
export default HeaderComponent;