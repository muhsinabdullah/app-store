import React, { useEffect, useState } from "react";
import dImg from "../assets/icon-downloads.png";
import rImg from "../assets/icon-ratings.png";
import { toast } from "react-toastify";

const MyInstallation = () => {
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
        setInstalledApps(apps);
    }, []);

    const handleUninstall = (id) => {
        const updatedApps = installedApps.filter(app => app.id !== id);
        setInstalledApps(updatedApps);
        localStorage.setItem("installedApps", JSON.stringify(updatedApps));
        toast.info("App uninstalled successfully!");
    };

    if (installedApps.length === 0)
        return <p className="text-center mt-10 text-gray-500">No apps installed yet.</p>;

    return (
        <div className="px-5 lg:px-20 mt-10">
            <h1 className="text-4xl font-bold text-center mb-10">My Installed Apps</h1>
            <div className="flex flex-col gap-6">
                {installedApps.map((app) => (
                    <div
                        key={app.id}
                        className="flex items-center justify-between bg-base-100 shadow-md rounded-lg p-4 hover:shadow-lg transition"
                    >
                        {/* Left: Image + Info */}
                        <div className="flex items-center gap-4">
                            {/* App Image */}
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-32 h-32 object-cover rounded-lg"
                            />

                            {/* App Info */}
                            <div className="flex flex-col justify-center">
                                <h2 className="text-2xl font-semibold">{app.title}</h2>
                                <div className="flex gap-6 mt-2 items-center">
                                    <div className="flex items-center gap-1">
                                        <img src={dImg} alt="Downloads" className="w-4 h-4" />
                                        <p>{app.downloads}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <img src={rImg} alt="Rating" className="w-4 h-4" />
                                        <p>{app.ratingAvg}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <p className="text-gray-500">{app.size} MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Uninstall Button */}
                        <button
                            onClick={() => handleUninstall(app.id)}
                            className="btn btn-accent"
                        >
                            Uninstall
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyInstallation;
