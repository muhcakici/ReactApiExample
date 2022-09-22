import { Link } from "react-router-dom"

function MainPage() {
  return <div>Ana Sayfa
    <div><Link to={"/local"}>Alt Sayfaya Geç</Link></div>
  </div>
}
export default MainPage