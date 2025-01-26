import { Container, Header } from "@/styles/pages/app";
import { Provider } from "@/components/ui/provider";
import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import Image from "next/image";
import logoImg from "@/assets/logo.svg";
import { ShoppingBag } from "@phosphor-icons/react";
import { DrawerActionTrigger, DrawerBackdrop, DrawerRoot } from "@/components/ui/drawer";
import { Shop } from "@/components/shop";
import { useState } from "react";
import { ShopProvider, useShop } from "@/contexts/ShopContext";
import { useRouter } from "next/router";

// Aplica os estilos globais
globalStyles();

function MyAppHeader() {
  const [openShop, setOpenShop] = useState(false);
  const { shop } = useShop();
  const { pathname } = useRouter()
  
  return (
    <Header 
      data-page-success={pathname === '/success' ? true : false }
      data-exists-items={shop.length > 0 ? true : false}>
      <div className="logo">
        <Image src={logoImg} alt="" />
        <div>
          <h1>Ignite</h1>
          <p>shop</p>
        </div>
      </div>

      { pathname !== '/success' &&
        <DrawerRoot size="sm" open={openShop} onOpenChange={(e) => setOpenShop(e.open)}>
        <DrawerBackdrop />
        <DrawerActionTrigger asChild>
          <button 
            onClick={() => { return shop.length > 0 ? setOpenShop(true) : alert('Seu carrinho está vazio!')}}>
            <ShoppingBag />
            <span>{shop.length > 0 && shop.length}</span>
          </button>
        </DrawerActionTrigger>
        <Shop />
        </DrawerRoot>
      }
    </Header>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShopProvider>
      <Provider>
        <Container>
          <MyAppHeader />
          <Component {...pageProps} />
        </Container>
      </Provider>
    </ShopProvider>
  );
}
