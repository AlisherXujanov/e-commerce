import Heading from '../common/Heading/index'
import { Link } from 'react-router-dom'
import './style.scss'
import LogCom from './LogCom';
function Login() {
    return (
        <>
            <div className="login-wrapper">
                <Heading title={"My Account "} page={"Home page"} />
                <LogCom/>          
            </div>
        </>
    );
}
export default Login;