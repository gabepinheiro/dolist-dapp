import { Web3ReactProvider } from '@web3-react/core'
import { QueryClientProvider } from '@tanstack/react-query'

import { App } from './app'

import { metaMask, hooks } from '@/connectors/metamask'

import { queryClient } from './lib'

export function Root () {
  return (
    <QueryClientProvider client={queryClient}>
      <Web3ReactProvider connectors={[[metaMask, hooks]]}>
        <App />
      </Web3ReactProvider>
    </QueryClientProvider>
  )
}
