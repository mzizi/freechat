import { ButtonHTMLAttributes, FC, ReactNode } from "react";


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {

  return (
    <button {...props}
      className={`font-bold py-2 px-4 rounded inline-flex items-center 
          ${props?.className}`}
    >
      {props?.children}
    </button>
  )
}

export default Button;


