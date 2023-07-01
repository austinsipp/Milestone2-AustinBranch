import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Home</h1>
                </Link>
                <Link to='/tracker'>
                    <h1>Tracker</h1>
                </Link>
                <Link to='/about'>
                    <h1>About Us</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar