import userIcon from '../assets/user.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center pt-10'>
            <div className=''></div>

            <div className='nav space-x-5 font-semibold'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>

            <div className='login flex items-center gap-3'>
                <div>
                    <img src={userIcon} alt="" />
                </div>
                <Link to='/auth/login' className='btn btn-neutral'>Login</Link>

            </div>
        </div>
    );
};

export default Navbar;