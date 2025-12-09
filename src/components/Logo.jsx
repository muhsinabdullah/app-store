import React from 'react';
import logoImg from '../assets/logo.png'
const Logo = () => {
    return (
        <div className=' flex gap-2 items-center'>
            <div>
                <img className=' w-10' src={logoImg} alt="" />
            </div>
            <div>
                <h2 className=' text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-500 font-bold'>HERO.IO</h2>
            </div>
        </div>
    );
};

export default Logo;