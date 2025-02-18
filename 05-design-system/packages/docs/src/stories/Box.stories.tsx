import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, BoxProps } from '@ignite-ui/react'

/**
 * O componente `Box` é um container genérico para envolver elementos.
 *
 * - **Por padrão**, é um `<div>`, mas pode ser alterado com a prop `as`.
 * - **Possui estilos básicos**: preenchimento (`padding`), borda (`border`), cor de fundo (`backgroundColor`).
 */

const meta: Meta<BoxProps> = {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text>Testing my Box component</Text>,
  },
  argTypes: {
    as: {
      control: 'text',
      description: 'Define o elemento HTML renderizado. Padrão: `<div>`.',
      table: {
        defaultValue: { summary: 'div' },
      },
    },
    children: {
      control: false,
      description:
        'Define o conteúdo dentro do `Box` ex.: `<Components />, <div></div>`.',
    },
  },
}

export default meta

type Story = StoryObj<BoxProps>

export const Primary: Story = {}

export const AsSection: Story = {
  args: {
    as: 'section',
    children: <Text>Este Box é um &lt;section&gt;</Text>,
  },
}

export const CustomContent: Story = {
  args: {
    children: (
      <>
        <Text>Este é um Box com conteúdo personalizado.</Text>
        <Text size="sm">Ele suporta múltiplos elementos dentro.</Text>
      </>
    ),
  },
}
