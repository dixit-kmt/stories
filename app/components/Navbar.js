import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex justify-between flex-row min-w-screen bg-black h-16 p-5 md:rounded-t-xl">
      <div className="flex flex-row items-center">
        <div className="border-r border-[#fdc240] m-2 pr-2">
          <Image
            src="/logo.png"
            alt="ttt-logo"
            width={50}
            height={50}
            className="h-10 w-10 "
            priority
          />
        </div>
        <div>
          <Link href="/" className="text-white tracking-[.25em]">STORIES</Link>
        </div>
      </div>
      <div className="flex flex-row items-center order-last">
        <Link href="">
          <div className="flex items-center h-10 bg-[#fdc240] p-2 font-semibold rounded-md">
            Courses
          </div>
        </Link>
      </div>
    </div>
  );
}
