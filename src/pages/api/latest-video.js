export default async function handler(req, res) {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const PLAYLIST_ID = "UUZ26rxRj8zCBtujefGqdV2A";

  const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${YOUTUBE_API_KEY}&playlistId=${PLAYLIST_ID}&part=snippet&maxResults=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return res.status(404).json({ error: "No videos found in playlist." });
    }

    const latestVideo = data.items[0];

    res.status(200).json({
      videoId: latestVideo.snippet.resourceId.videoId,
      title: latestVideo.snippet.title,
    });
  } catch (error) {
    console.error("YouTube API error:", error);
    res.status(500).json({ error: "Failed to fetch video." });
  }
}
