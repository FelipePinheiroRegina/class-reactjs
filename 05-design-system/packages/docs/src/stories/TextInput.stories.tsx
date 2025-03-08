import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

const meta: Meta<TextInputProps> = {
  title: 'Typography/TextInput',
  component: TextInput,
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
          <Text>Email address</Text>
          {<Story />}
        </Box>
      )
    },
  ],
  argTypes: {
    prefix: {
      control: 'text',
      description: 'you can add a prefix on input element',
      table: {
        defaultValue: { summary: 'Hello world' },
      },
    },
  },
}

export default meta

type Story = StoryObj<TextInputProps>

export const Primary: Story = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: Story = {
  args: {
    prefix: 'call/',
  },
}
