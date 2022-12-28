import { FC, ReactNode } from "react";


export interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

const Container: FC<ContainerProps> = (props: ContainerProps) => {

  return (
    <div className={`w-full h-full max-width-[1000px] mx-auto p-[1.25rem] ${props?.className}`}>
      {props?.children}
    </div>
  )
}

export default Container;