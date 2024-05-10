import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className=' text-orange-600 pr-16 pt-2'>
            <ul className='flex justify-end items-center'>
                <li className='text-white mr-4 font-bold font-mono'>Welcome ! {user?.displayName}</li>
                <li><div className="avatar">
  <div className="w-12 mask mask-hexagon">
    <img className='w-8 h-8' src={user?.photoURL} />
  </div>
</div></li>
            </ul>
        </div>
    );
};

export default Navbar;