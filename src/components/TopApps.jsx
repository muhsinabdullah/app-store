import React, { useEffect, useState } from 'react';
import dImg from '../assets/icon-downloads.png'
import rImg from '../assets/icon-ratings.png'
import { Link } from 'react-router';

const TopApps = () => {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        fetch('./apps.json')
            .then(res => res.json())
            .then(data => setApps(data))
            .catch(err => console.log(err))
    }, [])
    console.log(apps);

    return (
        <div className=' mt-8 mb-8'>
            <div>
                <h1 className=' text-4xl font-bold text-center'>Trending Apps</h1>
                <p className=' text-[#627382] text-center mt-3'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='  px-[145px]'>
                <div className=' grid grid-cols-1 lg:grid-cols-4 mt-12 gap-10'>
                    {
                        apps.slice(0, 8).map(app =>
                            <div className="card bg-base-100 w-[250px] shadow-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                                <figure>
                                    <img className='w-full h-[200px] object-cover'
                                        src={app?.image}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {app?.title}
                                    </h2>
                                    <div className="card-actions justify-between">
                                        <div className=" flex items-center">
                                            <img className=' w-4 h-4' src={dImg} alt="" />
                                            <p className=' badge badge-soft badge-accent'>{app?.downloads}</p>
                                        </div>
                                        <div className=" flex items-center">
                                            <img className=' w-4 h-4' src={rImg} alt="" />
                                            <p className=' badge badge-soft badge-warning'>{app?.ratingAvg}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
            <div className="flex justify-center items-center mt-5">
                <Link to="/apps">
                    <button className="btn btn bg-gradient-to-r from-purple-700 to-purple-500 text-white">
                        View all
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default TopApps;