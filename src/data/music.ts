export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration?: number; // in seconds (loaded dynamically from audio metadata)
  durationFormatted?: string;
  src: string;
  coverArt: string;
  initials?: string;
}

export const playlistData: Track[] = [
  {
    id: "lavender-haze",
    title: "Lavender Haze",
    artist: "Taylor Swift",
    album: "Bhoomi's Playlist",
    duration: 202,
    durationFormatted: "3:22",
    src: "/music/lavender-haze.mp4",
    coverArt: "✨",
    initials: "LH"
  }
];
