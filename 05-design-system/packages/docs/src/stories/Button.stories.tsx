import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'
import { ArrowRight } from '@phosphor-icons/react'

const meta: Meta<ButtonProps> = {
  title: 'Typography/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Send',
  },
  argTypes: {
    as: {
      control: 'text',
      description: 'Define o elemento HTML renderizado. Padrão: `<button>`.',
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    variant: {
      control: 'select',
      description: 'Define o tipo do button, por padrão ele é primary.',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      description: 'Define o tamanho do button, por padrão ele é md',
      options: ['sm', 'md'],
    },
  },
}

export default meta

type Story = StoryObj<ButtonProps>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Create',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Send',
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Next
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
