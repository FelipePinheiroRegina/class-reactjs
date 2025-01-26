import axios from 'axios';
import { createContext, useContext, useState, ReactNode } from 'react';

interface PropsProvider {
  children: ReactNode
}

export interface PropsShop {
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  description: string,
  defaultPriceId: string,
}

// Define o tipo do contexto
interface ShopContextData {
  shop: PropsShop[],
  handleAddProductShop: (product: PropsShop) => void;
  handleRemoveProductShop: (productId: string) => void;
  handleBuyProduct: (arrayPriceIds: PropsShop[]) => void,
  isRedirect: boolean
}

const ShopContext = createContext<ShopContextData | undefined>(undefined);

export function ShopProvider({ children }: PropsProvider) {
  const [ shop, setShop ] = useState<PropsShop[]>([]);
  const [ isRedirect, setIsRedirect ] = useState(false)

  function handleAddProductShop(product: PropsShop): void {
    setShop((state) =>  {
      const productExist = state.find((stateProduct) => stateProduct.id === product.id)

      if(productExist) {
        return state.map((stateProduct) => 
          stateProduct.id === product.id ? product : stateProduct
        )
      } else {
        return [ ...state, product ]
      }
    })
  }

  function handleRemoveProductShop(productId: string) {
    setShop((state) => {
      return state.filter(stateProduct => stateProduct.id !== productId)
    })
  }

  async function handleBuyProduct(arrayPriceIds: PropsShop[]) {
    if(arrayPriceIds.length === 0) return alert('Seu carrinho está vazio!')
    setIsRedirect(true)

    try {
      const response = await axios.post('/api/checkout', {
        arrayPriceIds
      })

      const { checkoutUrl } = response.data

      //router.push('/checkout') caso for uma rota interna no next se redireciona assim

      window.location.href = checkoutUrl

    } catch (err: any) {
      setIsRedirect(false)
      // conectar com uma ferramenta de observabilidade: datadog / sentry
      alert('Falha ao comprar pedido')

    }
  }

  return (
    <ShopContext.Provider 
      value={{ 
        handleAddProductShop, 
        handleRemoveProductShop,
        handleBuyProduct,
        isRedirect,
        shop 
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
}
