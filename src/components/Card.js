
export default function Card({name,mediatype, time, imageUrl}) {
    return (
        <div className="bg-[#353A67] shadow-md rounded-[20px] flex items-center p-5 my-5">
            <div>
            <h2 className="text-[30px] text-white font-bold pt-[5px]">{name}</h2>
            <p className="text-[16px] text-white opacity-70 pt-[8px] pb-[5px]">{mediatype}</p>
            <p className="text-[16px] text-white opacity-70 pb-[5px]">{time}</p>
            </div>
            <img src={imageUrl} className="w-[168px] h-[168px]"/>
        </div>
    )
}