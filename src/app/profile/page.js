import MenuBar from "@/components/Menubar";
import Card from "@/components/Card";

export default function Profile() {
    return (
        <div className="p-[16px] flex flex-col ml-3 mr-3 gap-5">
        <header className="flex justify-center mt-15">
          <img className="w-[100px] h-[100px]" src="https://avatar.iran.liara.run/public/46"/>
        </header>
        <main>
          <h1 className="text-[30px] font-bold text-white">Activity History</h1>
          <Card name="Rainday Antiques" mediatype="Sleepcast" time="45 min" imageUrl="https://www.godubrovnik.com/wp-content/uploads/rainy-day.jpg"/>
        </main>
      </div>
    )
  }