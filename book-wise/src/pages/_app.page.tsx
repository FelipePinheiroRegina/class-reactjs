import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { Provider } from '@/components/ui/provider'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}
