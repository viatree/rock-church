import { useEffect, useState } from "react";

const VideoSection = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetch("/api/playlist-videos")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);

        if (data.length > 0) {
          setSelectedVideo(data[0]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  if (!selectedVideo) {
    return (
      <p className="text-center py-8 text-[#3a1212]">
        Loading videos...
      </p>
    );
  }

  return (
    <section className="bg-[#fff4ef] py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#b0846a] mb-4">
          <span className="w-7 h-7 rounded-full border border-[#b0846a] flex items-center justify-center text-[10px]">
            ⬤
          </span>
          <span>Video Sermons</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-semibold text-[#3a1212] leading-tight mb-4">
          Watch & Grow in Faith
        </h2>

        {/* Description */}
        <div className="border-l-2 border-gray-300 pl-6 text-gray-600 text-sm md:text-base max-w-3xl mb-10">
          Explore our latest sermons, worship sessions, and church activities.
          Be encouraged and strengthened through God's Word wherever you are.
        </div>

        {/* Main Video */}
        <div className="mb-10 overflow-hidden rounded-[32px] shadow-xl">
          <iframe
            className="w-full h-[250px] md:h-[500px]"
            src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
            title={selectedVideo.title}
            allowFullScreen
          />
        </div>

        {/* Playlist */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div
              key={video.videoId}
              onClick={() => setSelectedVideo(video)}
              className={`cursor-pointer overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                selectedVideo.videoId === video.videoId
                  ? "ring-2 ring-[#3a1212]"
                  : ""
              }`}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <p className="text-[#3a1212] font-medium line-clamp-2">
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VideoSection;