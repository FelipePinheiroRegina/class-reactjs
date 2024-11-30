import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react'
import { HomeContainer, Banner, GridCards } from './styles'
import { Card } from '../../components/Card'
import { IconBackgroundRadius } from '../../components/IconBackgroundRadius'
import imageCupCoffee from '../../assets/Imagem.png'
import { useCoffee } from '../../hooks/useCoffee'

export function Home() {
	const { coffeeState } = useCoffee()

	return (
		<HomeContainer>
			<Banner>
				<div className='blur-background'></div>
				<div className='phrases'>
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

					<div className='icons-with-phrases'>
						<span className='icons'>
							<IconBackgroundRadius typeColorsBackgroundRadius='yellow_dark'>
								<ShoppingCart weight='fill'/>
							</IconBackgroundRadius>

							<p>Compra simples e segura</p>
						</span>

						<span className='icons'>
							<IconBackgroundRadius typeColorsBackgroundRadius='yellow'>
								<Timer weight='fill'/>
							</IconBackgroundRadius>

							<p>Entrega rápida e rastreada</p>
						</span>

						<span className='icons'>
							<IconBackgroundRadius typeColorsBackgroundRadius='base_text'>
								<Package weight='fill'/>
							</IconBackgroundRadius>

							<p>Embalagem mantém o café intacto</p>
						</span>

						<span className='icons'>
							<IconBackgroundRadius typeColorsBackgroundRadius='purple'>
								<Coffee weight='fill'/>
							</IconBackgroundRadius>

							<p>O café chega fresquinho até você</p>
						</span>
					</div>
				</div>

				<img src={imageCupCoffee}/>
			</Banner>

			<div className='title-cards-container'>
				<h1>Our coffees</h1>
				<GridCards>
					{coffeeState.map((coffee) => (
						<Card 
							key={`${coffee.id}-${coffee.name}`}
							coffee={coffee}
						/>
					))}
				</GridCards>
			</div>
		</HomeContainer>
	)
}