import { Dispatch, ReactNode, SetStateAction } from "react";
import { Transition } from '@headlessui/react';

import Button from "./Button";
import Container from "./Container";

export interface DrawerProps {
  title?: string;
  description?: string;
  children: ReactNode,
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function Drawer({
  title = '',
  description = '',
  children,
  isOpen,
  setIsOpen,
}: DrawerProps) {
  return (
    <Transition show={isOpen}
      enter="transition ease-in-out duration-300 transform"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <Container className="flex flex-col p-0 gap-4 divide-y-[0.05rem] divide-solid divide-gray-700">
        <div
          className="p-4 font-bold text-lg md:text-xl uppercase text-gray-800"
        >

          {title}

        </div>
        <div className="p-4 capitalize text-gray-500">
          {description}
        </div>
        <div className="w-full h-full flex flex-col gap-8 p-6">
          {children}
        </div>

        <div className="w-full flex gap-8 flex-wrap p-6">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gray-800 text-white"
          >
            Close
          </Button>
        </div>
      </Container>
    </Transition>
  );
}
