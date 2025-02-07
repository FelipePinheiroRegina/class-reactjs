import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, BoxProps } from '@ignite-ui/react'

const meta: Meta<BoxProps> = {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text> Testing the my component box </Text>,
  },
}

export default meta

type Story = StoryObj<BoxProps>

export const Primary: Story = {}
