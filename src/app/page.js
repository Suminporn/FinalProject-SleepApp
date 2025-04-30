'use client';
import Menubar from "@/components/Menubar"
import Card from "@/components/Card";

import { useState, useEffect } from 'react';

const songs = [
  {title: "Ocean Waves", url: "/musics/ocean-waves.mp3", media: "Nature", image: "https://www.godubrovnik.com/wp-content/uploads/rainy-day.jpg"} ,
  {title: "Raining Weather", url: "/musics/raining.mp3", media: "Nature", image: "https://st3.depositphotos.com/1400069/35282/i/450/depositphotos_352828632-stock-photo-spring-rain-forest-fresh-branches.jpg"} ,
  {title: "Peaceful Sleep", url: "/musics/peaceful-sleep.mp3", media: "Music", image: "https://img.freepik.com/premium-photo/cozy-bedroom-adorned-with-starshaped-lights-walls-creating-dreamy-magical-nighttime-ambiance_1323182-658.jpg"} ,
  {title: "Relaxing Piano", url: "/musics/relaxing-piano.mp3", media: "Music", image: "https://cdn.pixabay.com/video/2022/10/12/134486-759714562_tiny.jpg"}
];

export default function Home() {
    const [currentSong, setCurrentSong] = useState(null);
    const [audio, setAudio] = useState(null);
    const [fadeOut, setFadeOut] = useState(false);
    const [opacity, setOpacity] = useState(1);
  

  const playRandomSong = () => {
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    setCurrentSong(randomSong);

    if (audio) {
      audio.pause();
    }

    const newAudio = new Audio(randomSong.url);
    newAudio.loop = true;
    newAudio.play();
    setAudio(newAudio);
  };

  useEffect(() => {
    if (currentSong) {
      const timeout = setTimeout(() => {
        setFadeOut(true);
      }, 3600 * 1000);

      return () => clearTimeout(timeout);
    }
  }, [currentSong]);

  useEffect(() => {
    if (fadeOut) {
      const fadeInterval = setInterval(() => {
        setOpacity((prev) => {
          if (prev <= 0) {
            clearInterval(fadeInterval);
            return 0;
          }
          return prev - 0.01;
        });
      }, 100);

      const volumeInterval = setInterval(() => {
        if (audio) {
          audio.volume = Math.max(0, audio.volume - 0.01);
          if (audio.volume === 0) {
            audio.pause();
            clearInterval(volumeInterval);
          }
        }
      }, 100);

      return () => {
        clearInterval(fadeInterval);
        clearInterval(volumeInterval);
      };
    }
  }, [fadeOut, audio]);

  return (
    <div className="p-[16px] flex flex-col gap-[16px]">
     <header className="flex justify-end mr-5 mt-10">
      <img className="w-[40px] h-[40px] p-[5px]" src="/favicon.png" />
      <img className="w-[40px] h-[40px] p-[5px]" src="/recenticon.png" />
     </header>

    <main className="flex flex-col ml-5 mr-5">
      <h1 className="text-[20px] font-semibold text-white opacity-70">Good evening</h1>
      <h2 className="text-[30px] font-bold text-white">At night</h2>
      <div className="flex justify-center mt-5 rounded-[20px] bg-blue-500/30 border-white border-1 ml-8">
        <button onClick={playRandomSong} className="text-[24px] text-white font-bold p-3 ">Random music</button>
      </div>
      <div className="ml-8">
        {currentSong && (
            <Card name={currentSong.title} mediatype={currentSong.media} imageUrl={currentSong.image} />
        )}
      </div>
      {fadeOut && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#000',
            opacity: 1 - opacity,
            transition: 'opacity 0.5s',
            zIndex: 999,
          }}
        ></div>
      )}
      <Menubar/>
     </main>
     
    </div>
  );
}
