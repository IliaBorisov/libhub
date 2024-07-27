import { Link } from 'react-router-dom';

import logo from '../../assets/libhub-light.svg';

import './Register.css';

export default function Register() {
    return (
        <section id='register-container'>
            <Link to="/"> <img id='logo-auth' src={logo} alt="" /></Link>

            <form id="register-form" action="">
                <h2 className='register-label'>Register</h2>
                <input type="email" id="register-email" name="email" placeholder="Email" />
                <input type="password" id="register-password" name="password" placeholder="Password" />
                <input type="password" id="repass" name="repass" placeholder="Confirm Password" />
                <input type="submit" className="register-auth-submit" value="Register now" />
                <Link to="/login" className='link-login'>Already have an account?</Link>
            </form>

        </section>
    );
}