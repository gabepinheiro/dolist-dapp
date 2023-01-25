import { metaMask, hooks } from '@/connectors/metamask'
import { useEffect } from 'react'
import { useTasks } from '@/hooks'

import { ReactComponent as Logo } from '@/assets/logo.svg'
import { Button, NewTask, TaskItem } from '@/components'

const { useAccount, useIsActive } = hooks

export function App () {
  const account = useAccount()
  const isActive = useIsActive()

  const {
    isTasksLoading,
    tasks,
    taskName,
    handleTaskNameChange,
    handleCreateTask,
    handleToggleComplete,
  } = useTasks()

  const handleConnect = async () => await metaMask.activate()
  const handleDisconnect = async () => {
    if (metaMask.deactivate) {
      await metaMask.deactivate()
    } else {
      await metaMask.resetState()
    }
  }

  useEffect(() => {
    (async () => {
      await metaMask.connectEagerly()
    })()
  }, [])

  return (
    <main className='max-w-[635px] w-full flex flex-col'>
      <div className='absolute right-10 flex gap-6 items-center'>
        <p className='text-white'>{account}</p>
        <Button
          variant={isActive ? 'secondary' : 'primary'}
          onClick={isActive ? handleDisconnect : handleConnect}
        >
          {isActive ? 'Disconnect' : 'Connect'}
        </Button>
      </div>
      <div className='pt-20 flex justify-center'>
        <Logo />
      </div>
      <NewTask
        taskName={taskName}
        onTaskNameChange={handleTaskNameChange}
        onCreateTask={handleCreateTask}
      />
      <div className='mt-8 flex flex-col gap-4'>
        {isTasksLoading && <p className='text-white text-2xl'>Loading...</p>}
        {!isTasksLoading &&
          tasks
            ?.filter((task) => task.taskName !== '')
            .map((task) => (
              <TaskItem
                key={task.index.toNumber()}
                data={task}
                onToggleComplete={handleToggleComplete(task.index.toNumber())}
              />
            ))}
      </div>
    </main>
  )
}
