import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'

const meta: Meta<TextAreaProps> = {
  title: 'Typography/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <Text>Observations...</Text>
          {<Story />}
        </Box>
      )
    },
  ],
}

export default meta

type Story = StoryObj<TextAreaProps>

export const Primary: Story = {
  args: {
    placeholder: 'Type any observations',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
