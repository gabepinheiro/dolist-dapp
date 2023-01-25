import { useContract } from './use-contract'
import { BaseContract, ContractTransaction } from 'ethers'
import TodoContractJson from '../../build/contracts/TodoContract.json'
import { useCallback } from 'react'
import { hooks } from '@/connectors/metamask'
import { Task } from '@/shared/types'

const { useAccount } = hooks

interface TodoContractType extends BaseContract {
  getTasks(): Promise<Task[]>;
  createTask(taskName: string, createdAt: string): Promise<ContractTransaction>;
  toggleComplete(taskId: number): Promise<ContractTransaction>;
}

export function useTodoContract () {
  const account = useAccount()

  const contract = useContract<TodoContractType>(
    TodoContractJson.networks['5777'].address,
    TodoContractJson.abi,
  )

  const getTasks = useCallback(async () => {
    const tasks = await contract?.getTasks()
    return tasks
  }, [contract])

  const createTask = useCallback(
    async (taskName: string) => {
      if (taskName.trim() === '') {
        return alert('You must give a name to the Task')
      }
      if (!account) return alert('Please, connect your wallet/account!')

      if (!contract) return

      const createdAt = new Date().toISOString()
      const tx = await contract.createTask(taskName, createdAt)
      await tx.wait()
    },
    [contract, account],
  )

  const toggleComplete = useCallback(
    async (taskId: number) => {
      if (!account) return alert('Please, connect your wallet/account!')

      if (!contract) return
      const tx = await contract.toggleComplete(taskId)
      await tx.wait()
    },
    [contract, account],
  )

  return { contract, getTasks, createTask, toggleComplete }
}
