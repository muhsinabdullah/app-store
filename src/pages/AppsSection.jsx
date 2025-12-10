import React, { useEffect, useState } from "react";
import dImg from "../assets/icon-downloads.png";
import rImg from "../assets/icon-ratings.png";
import noAppImg from "../assets/App-Error.png";
import Loading from "../components/Loading"; // Your loading spinner component
import { useNavigate } from "react-router-dom";

const AppsSection = () => {
    const [apps, setApps] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        setLoading(true);
        fetch("/apps.json")
            .then((res) => res.json())
            .then((data) => {
                setApps(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    const filteredApps = apps.filter((app) =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setLoading(true);


        setTimeout(() => setLoading(false), 500);
    };

    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold text-center mt-5">Our All Applications</h1>
                <p className="text-[#627382] text-center mt-3">
                    Explore all apps on the market developed by us. We code for Millions.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between px-10 mt-5 items-center gap-4">
                <h1 className="text-2xl font-bold">({filteredApps.length}) Apps Found</h1>

                <div className="relative w-full lg:w-1/3">
                    <input
                        type="search"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="px-5 lg:px-20 mt-10">
                {loading ? (
                    <Loading />
                ) : filteredApps.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {filteredApps.map((app) => (
                            <div
                                key={app.id}
                                className="card bg-base-100 shadow-sm hover:scale-105 transition-all duration-300 cursor-pointer"
                                onClick={() => navigate(`/apps/${app.id}`)}
                            >
                                <figure>
                                    <img className="w-full h-[200px] object-cover" src={app.image} alt={app.title} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{app.title}</h2>
                                    <div className="flex justify-between mt-2">
                                        <div className="flex items-center gap-2">
                                            <img src={dImg} alt="Downloads" className="w-4 h-4" />
                                            <p>{app.downloads}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src={rImg} alt="Rating" className="w-4 h-4" />
                                            <p>{app.ratingAvg}</p>
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
