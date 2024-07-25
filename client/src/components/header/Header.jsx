import logo from '../../assets/libhub.svg';
import avatar from '../../assets/john_stevens.svg';

import './Header.css';


export default function ComponentName() {
    return (
        <header>
            <img id='logo' src={logo} alt="" />
            <nav id='navbar'>
                <ul >
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Books</a></li>
                    <li><a href="#">Authors</a></li>
                    <li><a href="#">Series</a></li>
                    <li><a href="#">Log In</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Logout</a></li>
                    <li>
                        
                        <img className='profile-avatar-header' src={avatar}></img>
                    </li>
                </ul>
            </nav>
        </header>
    );
}