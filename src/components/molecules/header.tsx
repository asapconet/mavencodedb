import { BsBell } from "react-icons/bs";
import { Avatar } from "@chakra-ui/react";
import { LogoutModal } from "components/atoms/modal";
import { useState } from "react";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <header className="flex items-center justify-between h-20 border-b border-[1.5px] border-gray-200 px-4 lg:px-16 bg-white">
      <div className="text-2xl font-semibold">
        <span className="p-2 rounded-xl text-center text-white bg-pri">
          &gt;_
        </span>
        <span> tabler</span>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <a
          href="https://github.com/asapconet/mavencodedb"
          target="_blank"
          rel="noopener noreferrer"
          className="border-pri border-2 py-1 px-2 text-md rounded-sm font-semibold text-pri cursor-pointer"
        >
          Source code
        </a>
        <span className="relative p-1">
          <div className="p-1 rounded-full bg-err absolute top-0 right-0" />
          <BsBell size={20} className="cursor-pointer" />
        </span>
        <div className="flex items-center gap-2">
          <span onClick={openModal}>
            <Avatar.Root size="lg" mr={4}>
              <Avatar.Image src="https://i.pravatar.cc/300?u=po" />
              <Avatar.Fallback>JP</Avatar.Fallback>
            </Avatar.Root>
          </span>
          <span>
            <p className="font-semibold text-md text-neu-2">Jane Person</p>
            <p className="text-sm text-neu-1">Administrator</p>
          </span>
        </div>
      </div>
      <LogoutModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};
