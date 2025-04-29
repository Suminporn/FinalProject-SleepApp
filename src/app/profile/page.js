'use client';

import MenuBar from "@/components/Menubar";
import Card from "@/components/Card";

import { useState, useEffect } from 'react';

export default function Profile() {
  const [sleepTime, setSleepTime] = useState('');

  useEffect(() => {
    if (!sleepTime) return;

    const interval = setInterval(() => {
      const now = new Date();
      const [hour, minute] = sleepTime.split(':').map(Number);

      if (now.getHours() === hour && now.getMinutes() === minute) {
        alert('It is sleep time! Good night');
        clearInterval(interval);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [sleepTime]);

    return (
        <div className="p-8 flex flex-col">
          <header className="flex justify-center mt-15">
            <img className="w-[150px] h-[150px]" src="https://avatar.iran.liara.run/public/46"/>
          </header>
          <main>
            <div className="py-5 mt-5 text-white">
              <h3 className="text-[30px] font-bold pb-5">Setting Sleep Time</h3>
              <input className="p-4 bg-[#353A67] shadow-md rounded-[20px] text-[28px]"
              type="time"
              value={sleepTime}
              onChange={(e) => setSleepTime(e.target.value)}
              />
            </div>
            {/*<h1 className="text-[30px] font-bold text-white">Activity History</h1>
              <Card name="Rainday Antiques" mediatype="Nature Sound" imageUrl="https://www.godubrovnik.com/wp-content/uploads/rainy-day.jpg"/>*/}
          </main>
        </div>
    )
  }