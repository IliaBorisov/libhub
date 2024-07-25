import { Link } from 'react-router-dom';

import logo from '../../assets/libhub.svg';
import './Login.css'

export default function Login() {
    return (
        <section id='login-container'>
            <Link to="/"> <img id='logo-auth' src={logo} alt="" /></Link>

            <form id="login-form" action="">
                <p className='login-label'>Login</p>
                <input type="email" id="email" name="email" placeholder="Email" />
                <input type="password" id="login-password" name="password" placeholder="Password" />
                <input type="submit" className="auth-submit" value="Login" />
            </form>
        </section>
    );
}