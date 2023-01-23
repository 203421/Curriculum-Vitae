import "../assets/styles/Hoja.css"
import facebook from "../assets/IMG/facebook.png"
import gmail from "../assets/IMG/gmail.png"
import github from "../assets/IMG/github.png"
import unity from "../assets/IMG/unity.png"
function Hoja(){
    return(
        <div className="a">
                <img className="img1" src={facebook} alt="Logo Facebook" />
                <img  className="img2"   src={gmail} alt="Logo gmail" />
                <img  className="img3" src={github} alt="Logo github" />
                <img  className="img4" src={unity} alt="logo unity" />

        </div>

        
    )
}
export default Hoja;