import { BigNumber } from 'ethers'

export interface Task {
  index: BigNumber;
  taskName: string;
  isComplete: boolean;
  createdAt: string;
}
