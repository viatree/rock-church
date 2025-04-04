import { useEffect } from "react";

export default function Feed() {
    useEffect(() => {
        // Pastikan Elfsight script hanya dipasang sekali
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-6">Instagram Feed</h1>
            <div className="elfsight-app-759fa34b-bf4a-43e4-9a13-3f7ec82dbd77 w-full max-w-4xl" />
        </div>
    );
}
