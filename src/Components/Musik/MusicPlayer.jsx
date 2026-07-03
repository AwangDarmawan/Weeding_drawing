

import { useRef, useState ,useEffect} from "react";
import {
  FaPlay,
  FaPause,
  FaBackward,
  FaForward,
  FaRedoAlt,
  FaRandom,
} from "react-icons/fa";

import Cover from "../../assets/Img/anakkecil.png";
import Music from "../../assets/Bergema.mp3";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
const [duration, setDuration] = useState(0);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
  const audio = audioRef.current;

  if (!audio) return;

  const updateTime = () => {
    setCurrentTime(audio.currentTime);
  };

  const loadedMetadata = () => {
    setDuration(audio.duration);
  };

  audio.addEventListener("timeupdate", updateTime);
  audio.addEventListener("loadedmetadata", loadedMetadata);

  return () => {
    audio.removeEventListener("timeupdate", updateTime);
    audio.removeEventListener("loadedmetadata", loadedMetadata);
  };
}, []);
const formatTime = (time) => {
  if (isNaN(time)) return "00:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
};
const progress =
  duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section   className=" w-full px-5 py-8 flex justify-center">
      {/* Audio */}
      <audio
        ref={audioRef}
        src={Music}
        loop
        onEnded={() => setIsPlaying(false)}
      />

      <div className="w-full max-w-md">
        {/* Card */}
        <div
        data-aos="fade-down" data-aos-delay="800"
          className="
            rounded-2xl
            bg-[#101010]
            border border-white/10
            shadow-[0_10px_30px_rgba(0,0,0,0.45)]
            p-4
          "
        >
          <div className="flex items-center gap-4">
            {/* Cover */}
            <img
              src={Cover}
              alt="Album"
              className="w-24 h-24 rounded-xl object-cover"
            />

            <div className="flex-1">
              {/* Time */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-[11px] text-white">
                  {formatTime(currentTime)}
                </span>
<div
  className="relative flex-1 h-[4px] bg-gray-600 rounded-full cursor-pointer"
  onClick={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;

    audioRef.current.currentTime = percent * duration;
  }}
>
  <div
    className="absolute left-0 top-0 h-full bg-white rounded-full"
    style={{
      width: `${progress}%`,
    }}
  />

  <div
    className="absolute top-1/2 w-3 h-3 bg-red-500 rounded-full -translate-y-1/2"
    style={{
      left: `${progress}%`,
      transform: "translate(-50%,-50%)",
    }}
  />
</div>

                <span className="text-[11px] text-white">
                    {formatTime(duration)}
                </span>
              </div>

              {/* Controls */}
              <div className="flex justify-between items-center text-white">
                <FaRedoAlt className="text-xs opacity-70 cursor-pointer hover:text-red-500 transition" />

                <FaBackward className="text-lg cursor-pointer hover:text-red-500 transition" />

                <button
                  onClick={toggleMusic}
                  className="
                    w-11
                    h-11
                    rounded-full
                    bg-white
                    text-black
                    flex
                    items-center
                    justify-center
                    hover:scale-110
                    active:scale-95
                    transition
                  "
                >
                  {isPlaying ? (
                    <FaPause />
                  ) : (
                    <FaPlay className="ml-1" />
                  )}
                </button>

                <FaForward className="text-lg cursor-pointer hover:text-red-500 transition" />

                <FaRandom className="text-xs opacity-70 cursor-pointer hover:text-red-500 transition" />
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <p className="mt-4 text-center font-feltpen text-lg md:text-xl">
          Klik tombol <span data-aos="fade-down-right" data-aos-delay="1000" className="font-bold">"Mulai"</span> untuk
          mendengarkan musik...
        </p>
      </div>
    </section>
  );
}