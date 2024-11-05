import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useAuth } from "../../utils/authContext";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
export function LogoutModal({ isOpen = false, onClose }: IProps) {
  const { logout } = useAuth();

  const handleDelete = () => {
    onClose();
    logout();
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="flex flex-col items-center justify-center gap-8 w-full max-w-lg h-[300px] transform 
              overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <Dialog.Title
                  as="h1"
                  className="text-3xl font-semibold leading-6 text-gray-900"
                >
                  Logout
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to logout?
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    className="justify-center rounded-md border border-transparent bg-err px-16 py-3
                     text-md font-medium text-white hover:bg-blue-200 focus:outline-none 
                     focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    No
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-16 py-3
                    text-md font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2
                     focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={handleDelete}
                  >
                    Yes
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
