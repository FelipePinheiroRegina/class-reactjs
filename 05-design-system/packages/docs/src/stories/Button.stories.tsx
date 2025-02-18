import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

const meta: Meta<ButtonProps> = {
  title: 'Typography/Button',
  component: Button,
  args: {
    children: 'Send',
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
