import { FC, ReactNode } from "react";

import { Container } from "../components";

export interface BaseLayoutProps {
  className?: string;
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children, className }) => {
  return (
    <main className={`w-screen full min-h-screen ${className}`}>
      <Container className="!p-0 flex flex-col items-center justify-center">
        {children}
      </Container>
    </main>
  )
}

export default BaseLayout;