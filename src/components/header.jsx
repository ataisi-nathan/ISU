import Logo from '../assets/NUAS.png'
import { Link } from 'react-router-dom';
import '../styles/header.css'

function Header() {
    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="" />
                <h1>I.S.U</h1>
            </div>
            <div className='desktop'>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/news'>News</Link>
                    <Link to='/election'>Election</Link>
                    <Link to='/officials'>Officials</Link>
                </nav>
                <div className="login">Register/Login</div>
            </div>
            <div className="mobile">
                
                
            </div>
        </header>
    );
}
export default Header;