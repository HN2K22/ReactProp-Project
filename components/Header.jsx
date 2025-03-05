import img from "../src/images/logo.png"
export default function Header() {
    return(
        <header>
        <nav className="navContainer">
            <div className="nav-left">
            <img className="nav-logo" src={img} alt="Hello World" />
            </div>
            <div className="nav-right">
                <ul className="nav-list">
                    <li className="nav-links"> <a href="">Home</a> </li>
                    <li className="nav-links"><a href="">About</a></li>
                    <li className="nav-links"><a href="">Contact</a></li>
                    <li className="nav-links"><a href="">Github</a></li>
                </ul>
            </div>

        </nav>
        </header>   
    );
}