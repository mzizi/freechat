import { Dispatch, FC, SetStateAction, useState } from 'react';
import { FiMenu } from "react-icons/fi";

import Button from './Button';
import Container from './Container';

export interface NavbarProps {
  title?: string;
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const NavBar: FC<NavbarProps> = ({ title = "FreeChat-UI", isOpen, setIsOpen }) => {
  return (
    <nav className='w-full h-full bg-neutral-200'>
      <Container className='!p-4 w-full flex flex-wrapp items-center gap-16 md:gap-20'
      >
        <Button
          className='w-max border-2 border-neutral-800 rounded-md'
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu />
        </Button>

        <div className='flex-1 flex items-center justify-between gap-8'>
          <a href="/" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="/blog" onClick={() => setIsOpen(false)}>
            Blog
          </a>
          <a href="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>

      </Container>
    </nav>
  );
}

export default NavBar;
