import React from 'react';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import bannerImg from '../assets/hero.png'
const Banner = () => {
    return (
        <div>
            <div>
                <h1 className=' text-6xl font-black text-center mt-8'>We Build <br />
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-500 font-bold'>  Productive </span> Apps</h1>
                <p className=' text-[#627382] text-center mt-5'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className="flex items-center justify-center mt-5 gap-3">
                {/* Google Play Button */}
                <a
                    href="https://play.google.com/store/games?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn flex items-center gap-2"
                >
                    <FaGooglePlay />
                    Google Play
                </a>

                {/* App Store Button */}
                <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn flex items-center gap-2"
                >
                    <FaAppStoreIos />
                    App Store
                </a>
            </div>


            <div className="mt-5 flex justify-center">
                <img
                    src={bannerImg}
                    alt=""
                    className="w-full max-w-md object-cover"
                />
            </div>

        </div>
    );
};

export default Banner;