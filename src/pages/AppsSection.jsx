import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import dImg from '../assets/icon-downloads.png';
import rImg from '../assets/icon-ratings.png';
import noAppImg from '../assets/App-Error.png';

const AppsSection = () => {
    const [apps, setApps] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('./apps.json')
            .then(res => res.json())
            .then(data => setApps(data))
            .catch(err => console.log(err))
    }, []);

    const filteredApps = apps.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold text-center mt-5'>Our All Applications</h1>
                <p className='text-[#627382] text-center mt-3'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex justify-between px-[135px] mt-5'>
                {/* Total apps */}
                <div>
                    <h1 className='text-2xl font-bold'>({filteredApps.length}) Apps Found</h1>
                </div>

                {/* Search bar */}
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            type="search"
                            required
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </label>
                </div>
            </div>

            <div className='px-[145px]'>
                {filteredApps.length > 0 ? (
                    <div className='grid grid-cols-1 lg:grid-cols-4 mt-12 gap-10'>
                        {filteredApps.map(app => (
                            <div key={app.id}
                                className="card bg-base-100 w-[250px] shadow-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                                onClick={() => navigate(`/apps/${app.id}`)}
                            >
                                <figure>
                                    <img className='w-full h-[200px] object-cover' src={app?.image} alt={app?.title} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{app?.title}</h2>
                                    <div className="card-actions justify-between">
                                        <div className="flex items-center">
                                            <img className='w-4 h-4' src={dImg} alt="" />
                                            <p className='badge badge-soft badge-accent'>{app?.downloads}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <img className='w-4 h-4' src={rImg} alt="" />
                                            <p className='badge badge-soft badge-warning'>{app?.ratingAvg}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center mt-12">
                        <img src={noAppImg} alt="No App Found" className="w-64 h-64 mb-4" />
                        <p className="text-gray-500 text-lg font-medium">No App Found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppsSection;
