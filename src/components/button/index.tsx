import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button ({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const bgColor = variant === 'primary' ? 'bg-primary' : 'bg-red-500'
  return (
    <button
      className={`${bgColor} h-10 rounded text-white flex items-center justify-center px-4 py-2 min-w-[105px] font-bold text-base hover:bg-primaryDark transition-all -tracking-[0.035em] outline-none focus:outline-none focus:ring focus:ring-primaryDark`}
      {...props}
    >
      {children}
    </button>
  )
}
