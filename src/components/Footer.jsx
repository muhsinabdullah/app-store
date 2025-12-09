import React from 'react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#001931] text-white rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Apps</a>
                <a className="link link-hover">Installation</a>
            </nav>
            <div>
                <Logo/>
            </div>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-500'>HERO.IO</span></p>
            </aside>
        </footer>
    );
};

export default Footer;