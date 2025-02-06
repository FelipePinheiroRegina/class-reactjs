import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@ignite-ui/react'

const meta: Meta<BoxProps> = {
  title: 'Box',
  component: Box,
  args: {
    children: (
      <>
        <p>Testing the element box</p>
      </>
    ),
  },
}

export default meta

type Story = StoryObj<BoxProps>

export const Primary: Story = {}
