import { 
    DrawerContentStyled,
    DrawerCloseTriggerStyled,
    DrawerHeaderStyled,
    DrawerTitleStyled,
    DrawerBodyStyled,
    DrawerFooterStyled,
    Shirt,
} from '@/styles/pages/shop'
import Image from 'next/image'
import { DefaultButton } from './default-button'
import { useShop } from '@/contexts/ShopContext'
import { useMemo } from 'react'

export function Shop() {
    const { shop, handleRemoveProductShop, handleBuyProduct } = useShop()

    const total = useMemo(() => {
        return shop.reduce((acc, product ) => {
            return acc + product.price
        }, 0)
    }, [shop])
    
    return (
        <DrawerContentStyled>
            <DrawerCloseTriggerStyled/>
            <DrawerHeaderStyled>
                <DrawerTitleStyled>
                    Sacola de compras
                </DrawerTitleStyled>
            </DrawerHeaderStyled>
            <DrawerBodyStyled>
                {shop.length > 0 &&
                    shop.map(productShop => (
                        <Shirt key={productShop.id}>
                            <div className='image-container'>
                                <Image src={productShop.imageUrl} width={95} height={95} alt=''/>
                            </div>
                            <div className='details-shirt'>
                                <div>
                                    <h3>{productShop.name}</h3>
                                    <strong>
                                        {new Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL' }).format(productShop.price / 100)}
                                    </strong>
                                </div>
                                <button onClick={() => handleRemoveProductShop(productShop.id)}>Remover</button>
                            </div>
                        </Shirt>
                    ))
                }
            </DrawerBodyStyled>
            <DrawerFooterStyled>
                <div className='amount'>
                    <span>Quantidade</span>
                    <span> { shop.length > 0 && shop.length } itens </span>
                </div>

                <div className='total'>
                    <strong>Valor Total</strong>
                    <strong>
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL' }).format(total / 100)}
                    </strong>
                </div>

                <DefaultButton 
                    label="Finalizar compra" 
                    onClick={() => 
                        shop.length > 0 ? handleBuyProduct(shop) : alert('Seu carrinho está vazio!')}
                />
            </DrawerFooterStyled>
        </DrawerContentStyled>
    )
}
