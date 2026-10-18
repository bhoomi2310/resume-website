import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Music2,
  AlertCircle,
} from 'lucide-react';
import { playlistData, Track } from '../../data/music';

export const MusicBoxWindow: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(() => playlistData[0]?.duration || 202);
  const [volume, setVolume] = useState(() => {
    const saved = localStorage.getItem('bhoomi_music_volume');
    return saved !== null ? parseFloat(saved) : 0.6;
  });
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack: Track = playlistData[currentTrackIndex] || playlistData[0];

  useEffect(() => {
    localStorage.setItem('bhoomi_music_volume', volume.toString());
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Synchronize audio source when track changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      setHasError(false);
      setCurrentTime(0);
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      }
    }
  }, [currentTrackIndex]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setHasError(false);
      }).catch((e) => {
        console.warn('Playback blocked or file issue:', e);
        setHasError(true);
        setIsPlaying(false);
      });
    }
  };

  const handleNext = () => {
    if (playlistData.length <= 1) {
      // With single track: restart track from 0:00
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        if (isPlaying) {
          audioRef.current.play().catch(() => {});
        }
      }
      setCurrentTime(0);
    } else {
      setCurrentTrackIndex((prev) => (prev + 1) % playlistData.length);
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    if (playlistData.length <= 1) {
      // With single track: restart track from 0:00
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        if (isPlaying) {
          audioRef.current.play().catch(() => {});
        }
      }
      setCurrentTime(0);
    } else {
      setCurrentTrackIndex((prev) => (prev - 1 + playlistData.length) % playlistData.length);
      setIsPlaying(true);
    }
  };

  const handleEnded = () => {
    if (playlistData.length <= 1) {
      // Loop track continuously when finished
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
      setCurrentTime(0);
    } else {
      handleNext();
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current.duration && !isNaN(audioRef.current.duration)) {
        setDuration(audioRef.current.duration);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="w-full h-full overflow-y-auto px-5 py-6 sm:px-8 sm:py-7 flex flex-col items-center select-none space-y-5">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={currentTrack.src}
        loop={playlistData.length <= 1}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onCanPlay={() => setHasError(false)}
        onEnded={handleEnded}
        onError={() => {
          setHasError(true);
          setIsPlaying(false);
        }}
      />

      {/* Friendly Error Banner if track fails to load */}
      {hasError && (
        <div className="w-full max-w-sm px-3.5 py-2.5 rounded-xl bg-purple-500/10 dark:bg-purple-950/40 border border-[#9B6DFF]/40 text-[#5B2EA6] dark:text-purple-300 text-xs flex items-center gap-2.5 shadow-xs animate-in fade-in">
          <AlertCircle className="w-4 h-4 text-[#9B6DFF] flex-shrink-0" />
          <span className="leading-tight font-medium">
            Track unavailable, add lavender-haze.mp4 to /public/music
          </span>
        </div>
      )}

      {/* Retro Vinyl Record Player Artwork */}
      <div className="relative group">
        <div
          className={`w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-slate-950 via-[#181126] to-[#2E184A] p-3 shadow-2xl flex items-center justify-center border-4 border-slate-200/90 dark:border-slate-800 relative ${
            isPlaying ? 'animate-spin-slow' : ''
          }`}
        >
          {/* Vinyl Grooves */}
          <div className="w-full h-full rounded-full border border-purple-500/10 flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-full border border-purple-400/15 flex items-center justify-center">
              {/* Center Vinyl Label with Clean Purple Gradient */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#5B2EA6] via-[#7B3FE4] to-[#9B6DFF] flex items-center justify-center shadow-inner border border-white/25 relative">
                {/* Subtle inner concentric ring for vinyl record aesthetic */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Center spindle hole */}
          <div className="absolute w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-[#9B6DFF]/60 z-10" />
        </div>

        {/* Purple Animated Visualizer Bars */}
        <div className="flex items-center justify-center gap-1.5 h-6 mt-4">
          {[40, 70, 100, 60, 85, 45, 95, 65, 35].map((height, idx) => (
            <div
              key={idx}
              className={`w-1 rounded-full bg-gradient-to-t from-[#5B2EA6] to-[#9B6DFF] transition-all duration-150 ${
                isPlaying ? 'opacity-90' : 'opacity-25 h-1.5'
              }`}
              style={{
                height: isPlaying ? `${Math.max(4, (height * (idx % 2 === 0 ? 0.9 : 0.6)))}%` : '4px',
                animation: isPlaying ? `pulse 0.8s ease-in-out infinite alternate ${idx * 0.1}s` : 'none',
              }}
            />
          ))}
        </div>
      </div>

      {/* Track Info */}
      <div className="text-center space-y-1 w-full max-w-sm">
        <h3 className="text-lg font-display font-bold text-slate-900 dark:text-slate-100 truncate">
          {currentTrack.title}
        </h3>
        <p className="text-xs font-semibold text-[#9B6DFF] dark:text-purple-300 truncate">
          {currentTrack.artist} • {currentTrack.album}
        </p>
      </div>

      {/* Progress Slider */}
      <div className="w-full max-w-sm space-y-1.5">
        <input
          type="range"
          min="0"
          max={duration || 202}
          step="0.1"
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer music-slider"
        />
        <div className="flex justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex items-center justify-center gap-5">
        <button
          onClick={handlePrev}
          className="p-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-[#9B6DFF] border border-slate-200 dark:border-slate-700 transition-all shadow-xs"
          title="Restart / Previous Track"
          aria-label="Restart / Previous"
        >
          <SkipBack className="w-4 h-4" />
        </button>

        <button
          onClick={togglePlay}
          className="p-4 rounded-full bg-gradient-to-tr from-[#5B2EA6] to-[#9B6DFF] hover:brightness-110 text-white transition-transform hover:scale-105 shadow-md shadow-[#5B2EA6]/30"
          title={isPlaying ? "Pause" : "Play"}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>

        <button
          onClick={handleNext}
          className="p-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-[#9B6DFF] border border-slate-200 dark:border-slate-700 transition-all shadow-xs"
          title="Restart / Next Track"
          aria-label="Restart / Next"
        >
          <SkipForward className="w-4 h-4" />
        </button>
      </div>

      {/* Volume Control - Fully visible and accessible */}
      <div className="flex items-center gap-3 w-full max-w-xs pt-1 pb-1">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="text-slate-500 hover:text-[#9B6DFF] dark:hover:text-purple-300 transition-colors"
          title={isMuted ? "Unmute" : "Mute"}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={isMuted ? 0 : volume}
          onChange={(e) => {
            setVolume(parseFloat(e.target.value));
            setIsMuted(false);
          }}
          className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer music-slider"
          aria-label="Volume Control"
        />
        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 w-8 text-right font-medium">
          {Math.round((isMuted ? 0 : volume) * 100)}%
        </span>
      </div>

      {/* Playlist List (Expandable structure for future tracks) */}
      <div className="w-full max-w-sm pt-4 pb-4 border-t border-slate-200/80 dark:border-slate-800 space-y-1.5">
        <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mb-2">
          <Music2 className="w-3.5 h-3.5 text-[#9B6DFF]" />
          <span>Playlist ({playlistData.length} Track{playlistData.length > 1 ? 's' : ''})</span>
        </div>

        {playlistData.map((track, idx) => (
          <button
            key={track.id}
            onClick={() => {
              if (currentTrackIndex === idx) {
                togglePlay();
              } else {
                setCurrentTrackIndex(idx);
                setIsPlaying(true);
              }
            }}
            className={`w-full px-3.5 py-2.5 rounded-xl text-left text-xs flex items-center justify-between transition-colors ${
              currentTrackIndex === idx
                ? 'bg-gradient-to-r from-[#5B2EA6] to-[#9B6DFF] text-white font-semibold shadow-xs'
                : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            <div className="flex items-center gap-2.5 truncate">
              <span className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center text-[10px] font-serif font-bold">
                {track.initials || "LH"}
              </span>
              <div className="truncate">
                <p className="truncate font-medium">{track.title}</p>
                <p className="text-[10px] opacity-80 truncate">{track.artist}</p>
              </div>
            </div>
            <span className="text-[10px] opacity-85 font-mono">{track.durationFormatted || formatTime(duration)}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
