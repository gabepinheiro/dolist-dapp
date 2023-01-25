import { useEffect, useMemo, useState } from 'react'

import { AddressZero } from '@ethersproject/constants'
import { Provider } from '@ethersproject/providers'
import { Contract, ContractInterface, Signer } from 'ethers'
import { isAddress } from 'ethers/lib/utils'

import { hooks } from '@/connectors/metamask'

const { useProvider } = hooks

export function getContract<T = Contract> (
  address: string,
  abi: ContractInterface,
  provider: Signer | Provider,
) {
  return new Contract(address, abi, provider) as T
}

export function useContract<T = Contract> (
  address: string,
  abi: ContractInterface,
) {
  const [contract, setContract] = useState<T | null>(null)

  const provider = useProvider()

  const signerOrProvider = useMemo(() => {
    if (provider?.getSigner) {
      return provider.getSigner()
    } else {
      return provider
    }
  }, [provider])

  useEffect(() => {
    function initializeContract () {
      if (!signerOrProvider) return
      const instanceContract = getContract<T>(address, abi, signerOrProvider)
      setContract(instanceContract)
    }

    initializeContract()
  }, [address, abi, signerOrProvider])

  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }

  return contract
}
