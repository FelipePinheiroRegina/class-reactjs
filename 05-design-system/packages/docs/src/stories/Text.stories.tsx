import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

/**
 * O componente `Text` é usado para renderizar textos estilizados.
 *
 * - **Por padrão**, é um `<p>`, mas pode ser alterado com a prop `as`.
 * - **Tamanhos disponíveis**: `'xxs'`, `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'2xl'`, `'4xl'`, `'5xl'`, `'6xl'`, `'7xl'`, `'8xl'`, `'9xl'`.
 * - **O tamanho padrão é `md`**.
 */

const meta: Meta<TextProps> = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  argTypes: {
    as: {
      control: 'text',
      description: 'Define o elemento HTML renderizado. Padrão: `<p>`.',
      table: {
        defaultValue: { summary: 'p' },
      },
    },
    size: {
      control: 'select',
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      description: 'Define o tamanho do texto. Padrão: `md`.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    children: {
      control: 'text',
      description: 'Define o conteúdo do texto.',
    },
  },
}

export default meta

type Story = StoryObj<TextProps>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    as: 'strong',
    children: 'Texto em negrito',
  },
}

export const LargeText: Story = {
  args: {
    size: '5xl',
    children: 'Texto grande com tamanho 5xl',
  },
}

export const SmallText: Story = {
  args: {
    size: 'xxs',
    children: 'Texto pequeno com tamanho xxs',
  },
}
