import MenuBar from "@/components/Menubar";

export default function Explore() {
  return (
      <div className="p-[16px] flex flex-col ml-3 mr-3 gap-5">
        <header className="justify-center mb-[10px]">
          <input type="text" placeholder="Search" className="text-white p-[16px] rounded-[20px] w-[100%] bg-[#353A67]"/>
        </header>
        <main>
          <h1 className="text-[30px] font-bold text-white">Collections</h1>
          <h2 className="text-black bg-orange-200 shadow-md rounded-[20px] flex p-5 mb-3">New and Popular</h2>
          <h2 className="text-black bg-orange-200 shadow-md rounded-[20px] flex p-5 mb-3">Woman's Collection</h2>
          <h2 className="text-black bg-orange-200 shadow-md rounded-[20px] flex p-5 mb-3">Calming Everyday Anxiety</h2>
          <h2 className="text-black bg-orange-200 shadow-md rounded-[20px] flex p-5 mb-3">Binaural Beats</h2>
          <h2 className="text-black bg-orange-200 shadow-md rounded-[20px] flex p-5 mb-3">Reframe Stress and Relax</h2>
          <h2 className="text-black bg-orange-200 shadow-md rounded-[20px] flex p-5 mb-3">Sleep Sounds</h2>
          <h2 className="text-black bg-orange-200 shadow-md rounded-[20px] flex p-5 mb-3">Breathing Exercises</h2>
        </main>
      </div>
    )
  }