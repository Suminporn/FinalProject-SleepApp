export default function Card({name, mediatype, imageUrl}) {
    return (
        <div className="bg-[#353A67] shadow-md flex items-center justify-between rounded-[20px] p-5 my-5 gap-10">
            <div className="flex-col">
            <h2 className="text-[30px] text-white font-bold pt-[5px]">{name}</h2>
            <p className="text-[16px] text-white opacity-70 pt-[8px] pb-[5px]">{mediatype}</p>
            </div>
            <img src={imageUrl} className="w-[168px] h-[168px] rounded-[15px]"/>
        </div>
    )
}