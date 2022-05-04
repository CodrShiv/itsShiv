import "./Welcome.css";
import BrowserWindow from "./BrowserWindow";
const Welcome = () => {
    return <div>
        <div className="intro">
            <p className="introText">Welcome</p>
            <h1 className="introName">It's Shiv</h1>
            <div className="skills">
                <h2 className="skill">Designer</h2>
                <h2 className="skill">Developer</h2>
                <h2 className="skill">Freelancer</h2>
            </div>
        </div>
        <div className="browser">
            <BrowserWindow/>
        </div>
    </div>
}
export default Welcome;
