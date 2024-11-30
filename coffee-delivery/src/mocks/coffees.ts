import espressoTraditional from '../assets/CoffeeImages/Type=Expresso.png'
import espressoAmerican from '../assets/CoffeeImages/Type=Americano.png'
import espressoCreamy from '../assets/CoffeeImages/Type=Expresso Cremoso.png'
import espressoIce from '../assets/CoffeeImages/Type=Café Gelado.png'
import coffeeMilk from '../assets/CoffeeImages/Type=Café com Leite.png'
import latte from  '../assets/CoffeeImages/Type=Latte.png'
import capuccino from '../assets/CoffeeImages/Type=Capuccino.png'
import macchiato from '../assets/CoffeeImages/Type=Macchiato.png'
import mochaccino from '../assets/CoffeeImages/Type=Mochaccino.png'
import hotChocolate from '../assets/CoffeeImages/Type=Chocolate Quente.png'
import cubano from '../assets/CoffeeImages/Type=Cubano.png'
import havaiano from '../assets/CoffeeImages/Type=Havaiano.png'
import arabic from '../assets/CoffeeImages/Type=Árabe.png'
import irish from '../assets/CoffeeImages/Type=Irlandês.png'

export const imagesCoffees = {
	espressoTraditional,
	espressoAmerican,
	espressoCreamy,
	espressoIce,
	coffeeMilk,
	latte,
	capuccino,
	macchiato,
	mochaccino,
	hotChocolate,
	cubano,
	havaiano,
	arabic,
	irish
}

type CoffeeImageKeys =
  | 'espressoTraditional'
  | 'espressoAmerican'
  | 'espressoCreamy'
  | 'espressoIce'
  | 'coffeeMilk'
  | 'latte'
  | 'capuccino'
  | 'macchiato'
  | 'mochaccino'
  | 'irish'

export interface PropsCoffee {
	id: number;
  	path: CoffeeImageKeys; // Agora aceita apenas as chaves válidas.
	name: string;
	description: string;
	tags: string[];
	price: number;
	amount: number;
}

export const coffees = [
	{
		id: 1,
		path: 'espressoTraditional' as CoffeeImageKeys,
		name: 'Espresso Traditional',
		description: 'Traditional coffee made with hot water and ground beans',
		tags: ['traditional'],
		price: 9.90,
		amount: 1,
	},

	{
		id: 2,
		path: 'espressoAmerican' as CoffeeImageKeys,
		name: 'Espresso American',
		description: 'Diluted espresso, less intense than traditional',
		tags: ['traditional'],
		price: 9.90,
		amount: 1,
	},

	{
		id: 3,
		path: 'espressoCreamy' as CoffeeImageKeys,
		name: 'Espresso Creamy',
		description: 'Traditional espresso with creamy foam',
		tags: ['traditional'],
		price: 9.90,
		amount: 1,
	},

	{
		id: 4,
		path: 'espressoIce' as CoffeeImageKeys,
		name: 'Espresso Ice',
		description: 'Drink prepared with espresso and ice cubes',
		tags: ['traditional', 'ice'],
		price: 9.90,
		amount: 1,
	},

	{
		id: 5,
		path: 'coffeeMilk' as CoffeeImageKeys,
		name: 'Coffee with Milk',
		description: 'Half and half traditional espresso with steamed milk',
		tags: ['traditional', 'with milk'],
		price: 9.90,
		amount: 1,
	},

	{
		id: 6,
		path: 'latte' as CoffeeImageKeys,
		name: 'Latte',
		description: 'A shot of espresso with double the milk and creamy foam',
		tags: ['traditional', 'with milk'],
		price: 9.90,
		amount: 1,
	},

	{
		id: 7,
		path: 'capuccino' as CoffeeImageKeys,
		name: 'Capuccino',
		description: 'Cinnamon drink made from equal doses of coffee, milk and foam',
		tags: ['traditional', 'with milk'],
		price: 9.90,
		amount: 1,
	},

	{
		id: 8,
		path: 'macchiato' as CoffeeImageKeys,
		name: 'Macchiato',
		description: 'Espresso mixed with some hot milk and froth',
		tags: ['traditional', 'with milk'],
		price: 9.90,
		amount: 1,
	},

	{
		id: 9,
		path: 'mochaccino' as CoffeeImageKeys,
		name: 'Mochaccino',
		description: 'Espresso with chocolate syrup, little milk and foam',
		tags: ['traditional', 'with milk'],
		price: 9.90,
		amount: 1,
	},

	{
		id: 10,
		path: 'hotChocolate' as CoffeeImageKeys,
		name: 'Hot chocolate',
		description: 'Drink made with chocolate dissolved in hot milk and coffee',
		tags: ['traditional', 'with milk'],
		price: 9.90,
		amount: 1,
	},

	{
		id: 11,
		path: 'cubano' as CoffeeImageKeys,
		name: 'Cuban',
		description: 'Iced espresso drink with rum, cream and mint',
		tags: ['special', 'alcoholic', 'ice'],
		price: 9.90,
		amount: 1,
	},

	{
		id: 12,
		path: 'havaiano' as CoffeeImageKeys,
		name: 'Hawaiian',
		description: 'Sweet drink prepared with coffee and coconut milk',
		tags: ['special'],
		price: 9.90,
		amount: 1,
	},

	{
		id: 13,
		path: 'arabic' as CoffeeImageKeys,
		name: 'Arabic',
		description: 'Drink prepared with Arabic coffee beans and spices',
		tags: ['special'],
		price: 9.90,
		amount: 1,
	},

	{
		id: 14,
		path: 'irish' as CoffeeImageKeys,
		name: 'Irish',
		description: 'Drink made from coffee, Irish whiskey, sugar and whipped cream',
		tags: ['special', 'alcoholic'],
		price: 9.90,
		amount: 1,
	}
]