import { InputHTMLAttributes } from 'react'

import checkIcon from '@/assets/check-icon.svg'

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {}

export function Checkbox (props: CheckboxProps) {
  return (
    <label className='checkbox cursor-pointer'>
      <input className='peer sr-only' type='checkbox' {...props} />
      <div className='relative w-6 h-6 rounded-md border-2 border-solid border-primary flex items-center justify-center after:content-[" "] after:bg-transparent after:rounded-[4px] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:scale-0 peer-checked:bg-primary transition-colors duration-300'>
        <img src={checkIcon} alt='Checkbox icon' className='absolute scale-0' />
      </div>
    </label>
  )
}
