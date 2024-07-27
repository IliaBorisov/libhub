import { Link } from 'react-router-dom';

import logo from '../../assets/libhub-light.svg';
import './Login.css'

export default function Login() {
    return (
        <section id='login-container'>
            <Link to="/"> <img id='logo-auth' src={logo} alt="" /></Link>

            <form id="login-form" action="">
                <h2 className='login-label'>Login</h2>
                <input type="email" id="login-email" name="email" placeholder="Email" />
                <input type="password" id="login-password" name="password" placeholder="Password" />
                <input type="submit" className="login-auth-submit" value="Login now" />
                <Link to="/register" className='link-register'>Don't have an account?</Link>
            </form>

        </section>
    );
}