import { ChangeEvent } from 'react'

import { Button, Input } from '@/components'

interface NewTaskProps {
  taskName: string;
  onTaskNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCreateTask: () => Promise<void>;
}

export function NewTask ({
  taskName,
  onTaskNameChange,
  onCreateTask,
}: NewTaskProps) {
  return (
    <div>
      <h2 className='mt-28 mb-2 text-white text-2xl font-bold'>Nova tarefa</h2>
      <div className='relative'>
        <Input
          placeholder='Compras da semana'
          value={taskName}
          onChange={onTaskNameChange}
        />
        <div className='absolute right-2 top-2'>
          <Button onClick={onCreateTask}>Adicionar</Button>
        </div>
      </div>
    </div>
  )
}
