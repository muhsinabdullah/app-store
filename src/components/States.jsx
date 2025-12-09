import React from 'react';

const States = () => {
    return (
        <div className="w-full py-14 bg-gradient-to-r from-[#8054FF] to-[#A45BFF] text-white">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
                Trusted By Millions, Built For You
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

                {/* Card 1 */}
                <div className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl 
                        hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <p className="text-sm uppercase tracking-wide text-gray-200">Total Downloads</p>
                    <h3 className="text-4xl font-extrabold mt-1">29.6M</h3>
                    <p className="text-xs mt-2 text-gray-200">21% More Than Last Month</p>
                </div>

                {/* Card 2 */}
                <div className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl 
                        hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <p className="text-sm uppercase tracking-wide text-gray-200">Total Reviews</p>
                    <h3 className="text-4xl font-extrabold mt-1">906K</h3>
                    <p className="text-xs mt-2 text-gray-200">46% More Than Last Month</p>
                </div>

                {/* Card 3 */}
                <div className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl 
                        hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <p className="text-sm uppercase tracking-wide text-gray-200">Active Apps</p>
                    <h3 className="text-4xl font-extrabold mt-1">132+</h3>
                    <p className="text-xs mt-2 text-gray-200">31 More Will Launch</p>
                </div>

            </div>
        </div>

    );
};

export default States;