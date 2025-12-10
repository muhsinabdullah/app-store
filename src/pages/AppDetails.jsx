import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import dImg from "../assets/icon-downloads.png";
import rImg from "../assets/icon-ratings.png";
import Loading from "../components/Loading";

const AppDetails = () => {
    const { id } = useParams();
    const [app, setApp] = useState(null);
    const [installed, setInstalled] = useState(false);
    const [loading, setLoading] = useState(true);

    // Load app data
    useEffect(() => {
        fetch("/apps.json")
            .then((res) => res.json())
            .then((data) => {
                const foundApp = data.find((a) => a.id === parseInt(id));
                setApp(foundApp);

                // Check if already installed
                const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
                const isInstalled = installedApps.some((a) => a.id === foundApp?.id);
                setInstalled(isInstalled);

                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [id]);

    // Install app
    const handleInstall = () => {
        if (!app) return;

        let installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];

        // Prevent duplicates
        if (!installedApps.some((a) => a.id === app.id)) {
            installedApps.push(app);
            localStorage.setItem("installedApps", JSON.stringify(installedApps));
            toast.success(`${app.title} installed successfully!`);
            setInstalled(true);
        }
    };

    if (loading) return <Loading />;

    if (!app) return <p className="text-center mt-10 text-gray-500">App not found.</p>;

    return (
        <div className="px-10 py-10 flex flex-col lg:flex-row gap-10">
            {/* App Image */}
            <img
                src={app.image}
                alt={app.title}
                className="w-full lg:w-1/3 rounded-lg object-cover"
            />

            {/* App Details */}
            <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4">{app.title}</h1>

                <div className="flex gap-6 mb-4">
                    <div className="flex flex-col items-center gap-2">
                        <img src={dImg} alt="Downloads" className="w-6 h-6" />
                        <p>{app.downloads}</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img src={rImg} alt="Rating" className="w-6 h-6" />
                        <p>{app.ratingAvg}</p>
                    </div>
                </div>

                {/* Install Button */}
                <button
                    onClick={handleInstall}
                    disabled={installed}
                    className={`px-6 py-2 rounded text-white ${installed ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                        }`}
                >
                    {installed ? `Installed (${app.size} MB)` : `Install (${app.size} MB)`}
                </button>

                {/* App Description */}
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold mb-2">Description</h2>
                    <p className="text-gray-700 whitespace-pre-line">{app.description}</p>
                </div>

                {/* Review Chart */}
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold mb-2">Reviews</h2>
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={app.ratings}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#4f46e5" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;
