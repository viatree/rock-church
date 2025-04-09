import { useEffect, useState } from "react";

const Videosection = () => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetch("/api/latest-video")
      .then((res) => res.json())
      .then((data) => setVideo(data))
      .catch((err) => console.error("Failed to fetch video:", err));
  }, []);

  if (!video) return <p className="text-center py-8">Loading video...</p>;

  return (
    <section className="bg-gray-100 py-16 px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-black uppercase text-[#2A0A0A] mb-4">
            The Latest Video of RIM
          </h2>
          <p className="text-gray-700 text-lg mb-6">{video.title}</p>
          <a
            href={`https://www.youtube.com/watch?v=${video.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2A0A0A] text-white px-6 py-3 rounded hover:bg-[#3b1e1e]"
          >
            Watch on YouTube
          </a>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}`}
            title={video.title}
            className="w-full h-full rounded-lg shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Videosection;
