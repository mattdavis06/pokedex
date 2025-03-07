"use client";
import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

type AudioPlayBtnProps = {
  pokemonCry: string;
};

const AudioPlayBtn = ({ pokemonCry }: AudioPlayBtnProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playPokemonCry = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        audio.currentTime = 0;
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex cursor-pointer" onClick={playPokemonCry}>
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)}>
        <source src={pokemonCry} type="audio/ogg" />
      </audio>
      <div className="ml-2 opacity-50 transition-opacity duration-200">
        {isPlaying ? <Pause /> : <Play />}
      </div>
    </div>
  );
};

export default AudioPlayBtn;
