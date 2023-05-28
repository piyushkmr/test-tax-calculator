import React, { FunctionComponent, PropsWithChildren } from 'react'
import {render, RenderOptions} from '@testing-library/react'
import { QueryClientProvider } from './reactQuery'
const AllTheProviders: FunctionComponent<PropsWithChildren<{}>> = ({children}) => {
  return (
    <QueryClientProvider>
      {children}
    </QueryClientProvider>
  )
}

const customRender = (ui: React.ReactElement, options?: RenderOptions) => {
  return render(ui, {wrapper: AllTheProviders, ...options})
}

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}
