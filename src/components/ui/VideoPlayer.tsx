import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause, SkipBack, SkipForward } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  title?: string;
  category?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
  onLoadStart?: () => void;
  onCanPlay?: () => void;
  onLoadedData?: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  title,
  category,
  autoPlay = true,
  muted = true,
  loop = true,
  className = "w-full h-full",
  onLoadStart,
  onCanPlay,
  onLoadedData,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [volume, setVolume] = useState(100);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleDurationChange = () => setDuration(video.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("durationchange", handleDurationChange);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("durationchange", handleDurationChange);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!videoRef.current.muted);
      if (!videoRef.current.muted) {
        setVolume(100);
        videoRef.current.volume = 1;
      } else {
        setVolume(0);
      }
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume / 100;
      if (newVolume > 0 && videoRef.current.muted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      } else if (newVolume === 0 && !videoRef.current.muted) {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleSkipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.min(
        videoRef.current.currentTime + 10,
        duration
      );
    }
  };

  const handleSkipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(
        videoRef.current.currentTime - 10,
        0
      );
    }
  };

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch(() => {
          // Fullscreen request failed
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      className={`relative bg-black group ${className}`}
      style={{
        aspectRatio: "16 / 9",
        cursor: "pointer",
      }}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        className="w-full h-full object-contain"
        onLoadStart={onLoadStart}
        onCanPlay={onCanPlay}
        onLoadedData={onLoadedData}
        onClick={handlePlayPause}
      />

      {/* Dark overlay for controls */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Title and Category (optional) - Top Position */}
      {(title || category) && (
        <div className="absolute top-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          {title && <h3 className="text-white text-sm md:text-base font-semibold">{title}</h3>}
          {category && <p className="text-gray-300 text-xs md:text-sm">{category}</p>}
        </div>
      )}

      {/* Controls Container - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Progress Bar */}
        <div className="px-3 md:px-4 pt-2">
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleProgressChange}
            className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-red-600 hover:accent-red-500"
            style={{
              background: `linear-gradient(to right, #dc2626 0%, #dc2626 ${progressPercentage}%, rgba(75, 85, 99, 0.5) ${progressPercentage}%, rgba(75, 85, 99, 0.5) 100%)`,
            }}
          />
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between px-3 md:px-4 py-2 gap-2">
          {/* Left Controls */}
          <div className="flex items-center gap-1 md:gap-2">
            {/* Play/Pause */}
            <button
              onClick={handlePlayPause}
              className="hover:bg-white/20 p-2 rounded transition-colors"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 md:w-5 md:h-5 text-white fill-white" />
              ) : (
                <Play className="w-4 h-4 md:w-5 md:h-5 text-white fill-white" />
              )}
            </button>

            {/* Skip Backward */}
            <button
              onClick={handleSkipBackward}
              className="hover:bg-white/20 p-2 rounded transition-colors"
              title="Skip -10s"
            >
              <SkipBack className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </button>

            {/* Skip Forward */}
            <button
              onClick={handleSkipForward}
              className="hover:bg-white/20 p-2 rounded transition-colors"
              title="Skip +10s"
            >
              <SkipForward className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </button>

            {/* Volume Control */}
            <div
              className="relative flex items-center group/volume"
              onMouseEnter={() => setShowVolumeSlider(true)}
              onMouseLeave={() => setShowVolumeSlider(false)}
            >
              <button
                onClick={handleMuteToggle}
                className="hover:bg-white/20 p-2 rounded transition-colors"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-white" />
                ) : (
                  <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                )}
              </button>

              {/* Volume Slider - Horizontal */}
              {showVolumeSlider && (
                <div className="absolute bottom-full mb-2 left-0 flex items-center gap-2 bg-black/80 px-2 py-2 rounded">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => handleVolumeChange(Number(e.target.value))}
                    className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-red-600"
                    style={{
                      background: `linear-gradient(to right, #dc2626 0%, #dc2626 ${volume}%, rgba(75, 85, 99, 0.5) ${volume}%, rgba(75, 85, 99, 0.5) 100%)`,
                    }}
                  />
                  <span className="text-white text-xs whitespace-nowrap w-8">
                    {volume}%
                  </span>
                </div>
              )}
            </div>

            {/* Time Display */}
            <span className="text-white text-xs md:text-sm font-mono ml-2">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-1">
            {/* Fullscreen */}
            <button
              onClick={handleFullscreen}
              className="hover:bg-white/20 p-2 rounded transition-colors"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? (
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 16H3v5h5v-2H5v-3zm5-11H7v2h3v3h2V7h-2V5zm11 11h-3v3h5v-5h-2v2zm0-11v3h2v-2h3V5h-5v2z" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
