import { InputHTMLAttributes } from 'react'

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {}

export function Input (props: InputProps) {
  return (
    <input
      className='w-full h-14 bg-gray-900 text-white placeholder:text-gray-100 text-sm sm:text-lg py-3 px-4 rounded-md outline-none focus:shadow-rounded focus:shadow-primary transition-all duration-300'
      {...props}
    />
  )
}
