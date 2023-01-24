import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  children: ReactNode;
}

export function Button ({ children, ...props }: ButtonProps) {
  return (
    <button
      className='h-10 bg-primary rounded text-white flex items-center justify-center px-4 py-2 min-w-[105px] font-bold text-base hover:bg-primaryDark transition-all -tracking-[0.035em] focus:outline-none focus:ring focus:ring-primaryDark'
      {...props}
    >
      {children}
    </button>
  )
}
