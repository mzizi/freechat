import { Dispatch, ReactNode, SetStateAction } from "react";
import { Transition } from "@headlessui/react";

import Button from "./Button";
import Container from "./Container";
import { FiAirplay, FiMessageCircle } from "react-icons/fi";

export interface SidebarProps {
  title?: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface SidebarLinkProps {
  label: string;
  href: string;
  icon: ReactNode;
  className?: string;
  colorScheme?: string;
  variant?: "solid" | "outline";
}

const styles = {
  link: "w-full text-purple-800 opacity-75 hover:opacity-100",
  linkIcon:
    "w-[2.5rem] h-[2.5rem] text-lg rounded p-2 hover:bg-purple-400 hover:text-purple-100",
};

export const SidebarLink = ({
  icon,
  label,
  variant,
  className,
  colorScheme = "purple",
  ...props
}: SidebarLinkProps) => {
  return (
    <a className={`rounded p-2 ${className}`} {...props}>
      <div className="flex flex-col items-center gap-2">
        {icon}
        <span className="text-sm font-semibold">{label}</span>
      </div>
    </a>
  );
};

export default function Sidebar({
  title = "",
  isOpen,
  setIsOpen,
}: SidebarProps) {
  return (
    <Transition show={isOpen}>
      <aside className={`h-screen w-40 shadow-md`}>
        <Container
          className={`flex h-full w-full flex-col justify-center gap-4 
        divide-y-[0.05rem] divide-solid divide-gray-700 !p-0`}
        >
          <div className="flex items-center p-4 text-gray-800">
            <h1 className="text-lg font-semibold uppercase">{title}</h1>
          </div>

          <div className="w-full flex-1 overflow-auto">
            <Container className="flex h-full w-full flex-col items-center gap-4 !p-4">
              <SidebarLink
                href="/"
                label="Dashboard"
                variant="solid"
                className={styles.link}
                icon={<FiAirplay className={styles.linkIcon} />}
              />
              <SidebarLink
                href="/"
                label="Emails"
                variant="solid"
                className={styles.link}
                icon={<FiMessageCircle className={styles.linkIcon} />}
              />
            </Container>
          </div>

          <div className="flex w-full flex-wrap gap-8 p-6">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 text-white"
            >
              Close
            </Button>
          </div>
        </Container>
      </aside>
    </Transition>
  );
}
