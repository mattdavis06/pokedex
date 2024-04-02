"use client";
import { useState } from "react";

type AudioPlayBtnProps = {
  pokemonCry: string;
};

const AudioPlayBtn = ({ pokemonCry }: AudioPlayBtnProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  let audio: HTMLAudioElement | null = null;

  const playPokemonCry = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex cursor-pointer" onClick={playPokemonCry}>
      <audio
        id="_pokemonAudio"
        ref={(node) => {
          audio = node;
        }}
      >
        <source src={pokemonCry} type="audio/ogg" />
      </audio>
      {isPlaying ? (
        <span className="icon-[ic--twotone-pause-circle] ml-2 h-8 w-8 opacity-50 transition-opacity duration-200"></span>
      ) : (
        <span className="icon-[ic--twotone-play-circle] ml-2 h-8 w-8 opacity-50 transition-opacity duration-200 hover:opacity-100"></span>
      )}
    </div>
  );
};

export default AudioPlayBtn;
