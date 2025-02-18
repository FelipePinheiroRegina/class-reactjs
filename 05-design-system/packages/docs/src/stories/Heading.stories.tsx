import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

/**
 * O componente `Heading` renderiza um título semântico.
 *
 * - **Por padrão**, o elemento HTML é um `<h2>`.
 * - **Você pode alterar o elemento** usando a propriedade `as`, por exemplo: `'h1'`, `'h3'`, etc.
 * - **Tamanhos disponíveis**: `'sm'`, `'md'`, `'lg'`, `'xl'`, `'2xl'`, `'3xl'`, `'4xl'`, `'5xl'`, `'6xl'`
 */

const meta: Meta<HeadingProps> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Custom Heading',
  },
  argTypes: {
    as: {
      control: 'text',
      description:
        'Define qual elemento HTML será renderizado. Padrão: `<h2>`.',
      table: {
        defaultValue: { summary: 'h2' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
      description:
        'Define o tamanho do Heading. Valores aceitos: `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    children: {
      control: 'text',
      description: 'Define o conteúdo do título.',
    },
  },
}

export default meta

type Story = StoryObj<HeadingProps>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    as: 'h1',
    size: '2xl',
    children: 'H1 Custom Heading',
  },
  render: (args) => <Heading {...args} />,
}
