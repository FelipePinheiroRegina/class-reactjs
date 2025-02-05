import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Send',
  },
}

export default meta

type Story = StoryObj<ButtonProps>

export const Primary: Story = {
  args: {
    size: 'small',
  },
}

export const Secondary: Story = {
  args: {
    size: 'large',
  },
}
