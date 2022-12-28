import { FC, ReactNode, SetStateAction, useState } from "react";

import { Button, Container, Navbar, Sidebar } from "../components";

export interface SplitLayoutProps {
  title?: string;
  className?: string;
  children?: ReactNode;
}

const SplitLayout: FC<SplitLayoutProps> = ({ title = "FreeChat-UI", children, className }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <main className={`w-full h-full min-h-screen ${className}`}>
      <Container className="!p-0 !max-w-full flex gap-0">
        <Sidebar
          title={title}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <section className="w-full h-full">
          <Container className="!p-0 flex flex-col gap-8 items-center justify-center">
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            {children}
          </Container>
        </section>
      </Container>
    </main>
  )
}

export default SplitLayout;