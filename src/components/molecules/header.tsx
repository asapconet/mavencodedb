import { BsBell } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";

export const Header = () => {
  return (
    <header className="flex items-center justify-between h-20 border-b border-[1.5px] border-gray-200 px-4 lg:px-16 bg-white">
      <div className="text-2xl font-semibold">
        <span className="p-2 rounded-xl text-center text-white bg-pri">
          &gt;_
        </span>
        <span> tabler</span>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <span className="border-pri border-2 py-1 px-2 text-md rounded-sm font-semibold text-pri cursor-pointer">
          {" "}
          Source code
        </span>
        <span className="relative p-1">
          <div className="p-1 rounded-full bg-err absolute top-0 right-0" />
          <BsBell size={20} className="cursor-pointer" />
        </span>
        <div className="flex items-center gap-2">
          <RxAvatar size={48} className="text-gray-500 cursor-pointer" />
          <span>
            <p className="font-semibold text-md text-neu-2">Jane Person</p>
            <p className="text-sm text-neu-1">Administrator</p>
          </span>
        </div>
      </div>
    </header>
  );
};
