import { ChangeEvent, useCallback, useState } from 'react'
import { useTodoContract } from '@/hooks'
import { useMutation, useQuery } from '@tanstack/react-query'

export function useTasks () {
  const { contract, getTasks, createTask, toggleComplete } = useTodoContract()

  const [taskName, setTaskName] = useState('')

  const {
    data: tasks,
    isLoading: isTasksLoading,
    refetch,
  } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
    enabled: Boolean(contract),
  })

  const createTaskMutation = useMutation({
    mutationKey: ['createTask'],
    mutationFn: createTask,
    onSuccess: async () => refetch(),
  })

  const toggleCompleteMutation = useMutation({
    mutationKey: ['toggleComplete'],
    mutationFn: toggleComplete,
    onSuccess: async () => refetch(),
  })

  const handleTaskNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setTaskName(e.target.value),
    [],
  )

  const handleCreateTask = useCallback(
    async () => createTaskMutation.mutateAsync(taskName),
    [taskName, createTaskMutation],
  )

  const handleToggleComplete = useCallback(
    (taskId: number) => async () => toggleCompleteMutation.mutateAsync(taskId),
    [toggleCompleteMutation],
  )

  return {
    isTasksLoading,
    tasks,
    taskName,
    handleTaskNameChange,
    handleCreateTask,
    handleToggleComplete,
  }
}
