import { Container, Header } from "@/styles/pages/app";

import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import Image from 'next/image' 
import logoImg from '@/assets/logo.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt=''/>

        <div>
          <h1>Ignite</h1>
          <p>shop</p>
        </div>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
