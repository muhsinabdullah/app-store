import React, { useEffect, useState } from "react";
import dImg from "../assets/icon-downloads.png";
import rImg from "../assets/icon-ratings.png";
import { toast } from "react-toastify";

const MyInstallation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState(""); // "" | "high" | "low"

    useEffect(() => {
        const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
        setInstalledApps(apps);
    }, []);

    const handleUninstall = (id) => {
        const updatedApps = installedApps.filter((app) => app.id !== id);
        setInstalledApps(updatedApps);
        localStorage.setItem("installedApps", JSON.stringify(updatedApps));
        toast.info("App uninstalled successfully!");
    };

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSortOrder(value);

        let sortedApps = [...installedApps];
        if (value === "high") {
            sortedApps.sort((a, b) => b.downloads - a.downloads);
        } else if (value === "low") {
            sortedApps.sort((a, b) => a.downloads - b.downloads);
        }
        setInstalledApps(sortedApps);
    };

    if (installedApps.length === 0)
        return (
            <div className="text-center mt-10">
                <h1 className="text-4xl font-bold mb-2">My Installed Apps</h1>
                <p className="text-gray-500 mb-4">
                    You have not installed any apps yet. Explore and install apps to see them here.
                </p>
                <p className="text-gray-500">0 Apps Found</p>
            </div>
        );

    return (
        <div className="px-5 lg:px-20 mt-10">
            {/* Page Heading */}
            <div className="text-center mb-6">
                <h1 className="text-4xl font-bold mb-2">Your Installed Apps</h1>
                <p className="text-gray-500">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            {/* Toolbar: Apps Found + Sort */}
            <div className="flex justify-between items-center mb-6">
                <p className="text-gray-700 font-semibold">{installedApps.length} Apps Found</p>

                <select
                    value={sortOrder}
                    onChange={handleSortChange}
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Sort by Downloads</option>
                    <option value="high">High → Low</option>
                    <option value="low">Low → High</option>
                </select>
            </div>

            {/* Installed Apps List */}
            <div className="flex flex-col gap-6">
                {installedApps.map((app) => (
                    <div
                        key={app.id}
                        className="flex items-center justify-between bg-base-100 shadow-md rounded-lg p-4 hover:shadow-lg transition"
                    >
                        {/* Left: Image + Info */}
                        <div className="flex items-center gap-4">
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-32 h-32 object-cover rounded-lg"
                            />

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
                            className=" btn btn-accent"
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
