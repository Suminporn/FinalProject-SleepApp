'use client';
import Menubar from "@/components/Menubar"
import Card from "@/components/Card";

import { useState, useEffect } from 'react';

const songs = [
  {title: "Ocean Waves", url: '/music/ocean-waves.mp3'}
];

export default function Home() {
    const [currentSong, setCurrentSong] = useState(null);
    const [audio, setAudio] = useState(null);
    const [sleepTime, setSleepTime] = useState('');
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

    <main className="flex flex-col justify-center ml-5 mr-5">
      <h1 className="text-[20px] font-semibold text-white opacity-70">Good evening</h1>
      <h2 className="text-[30px] font-bold text-white">At night</h2>
      <div className="ml-8">
        <Card name="Rainday Antiques" mediatype="Sleepcast" time="45 min" imageUrl="https://www.godubrovnik.com/wp-content/uploads/rainy-day.jpg" />
        <button className="m-1 p-2 text-[16px] text-white" onClick={playRandomSong}>สุ่มเพลงช่วยนอนหลับ</button>
            {currentSong && (
                <div className="mt-2 text-white">
                    <h2>now playing.. : {currentSong.title}</h2>
                </div>)}
        <Card name="John Legend's Sleep playlist" mediatype="Sleep music" time="500 min" imageUrl="https://avatar.iran.liara.run/public/69" />
      </div>
      <Menubar/>
     </main>
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
    </div>
  );
}
