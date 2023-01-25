import { Checkbox } from '@/components'
import { Task } from '@/shared/types'

interface TaskItemProps {
  data: Task;
  onToggleComplete: () => Promise<void>;
}

export function TaskItem ({ data, onToggleComplete }: TaskItemProps) {
  return (
    <div className='w-full bg-gray-900 flex justify-between items-center p-4 rounded-md'>
      <div>
        <p className='text-white font-medium'>{data.taskName}</p>
        <p className='text-gray-100 text-sm mt-1'>{data.createdAt}</p>
      </div>
      <Checkbox checked={data.isComplete} onChange={onToggleComplete} />
    </div>
  )
}
