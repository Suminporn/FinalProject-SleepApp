import Menubar from "@/components/Menubar"
import Card from "@/components/Card";

export default function Home() {
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
        <Card name="John Legend's Sleep playlist" mediatype="Sleep music" time="500 min" imageUrl="https://avatar.iran.liara.run/public/69" />
      </div>
      <Menubar/>
     </main>
    </div>
  );
}
