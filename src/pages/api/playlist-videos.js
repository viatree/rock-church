export default async function handler(req, res) {
  try {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const PLAYLIST_ID = "PLjPRXtnzSjB-wRVe5bckSOXycaWdlXO--";

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
    );

    const data = await response.json();

    const videos = data.items.map((item) => ({
      title: item.snippet.title,
      videoId: item.snippet.resourceId.videoId,
      thumbnail: item.snippet.thumbnails.high.url,
    }));

    res.status(200).json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch playlist" });
  }
}