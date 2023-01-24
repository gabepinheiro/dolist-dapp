import { Button, Checkbox, Input } from '@/components'
import { ReactComponent as Logo } from '@/assets/logo.svg'

function NewTask () {
  return (
    <div>
      <h2 className='mt-28 mb-2 text-white text-2xl font-bold'>Nova tarefa</h2>
      <div className='relative'>
        <Input placeholder='Compras da semana' />
        <div className='absolute right-2 top-2'>
          <Button>Adicionar</Button>
        </div>
      </div>
    </div>
  )
}

function TaskItem () {
  return (
    <div className='w-full bg-gray-900 flex justify-between items-center p-4 rounded-md'>
      <div>
        <p className='text-white font-medium'>Lorem ipsum dolor sit amet</p>
        <p className='text-gray-100 text-sm mt-1'>11/10/2021 às 19h53m</p>
      </div>
      <Checkbox />
    </div>
  )
}

export function App () {
  return (
    <main className='max-w-[635px] w-full flex flex-col'>
      <div className='pt-14 flex justify-center'>
        <Logo />
      </div>
      <NewTask />
      <div className='mt-8 flex flex-col gap-4'>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </main>
  )
}
