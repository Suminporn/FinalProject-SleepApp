import Link from "next/link";

export default function MenuBar() {
  return (
    <nav className="fixed flex bottom-0 left-0 right-0 p-[16px] px-[100px] pb-[24px] justify-between shadow-lg bg-black">
      <Link href="/" className="font-bold text-white">Home</Link>
      <Link href="/explore" className="font-bold text-white">Explore</Link>
      <Link href="/profile" className="font-bold text-white">Proflie</Link>
    </nav>
  )
}