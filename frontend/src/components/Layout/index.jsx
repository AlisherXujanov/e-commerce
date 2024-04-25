import './style.scss'
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';

function Navbar() {
    return (
        <main>
            <Navigation />

            <Outlet />

            <Footer />
        </main>
    );
}

export default Navbar;