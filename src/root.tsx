import { Web3ReactProvider } from '@web3-react/core'
import { App } from './app'

import { metaMask, hooks } from '@/connectors/metamask'

export function Root () {
  return (
    <Web3ReactProvider connectors={[[metaMask, hooks]]}>
      <App />
    </Web3ReactProvider>
  )
}
