import { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@ignite-ui/react'

const meta: Meta<MultiStepProps> = {
  title: 'Form/MultiStep',
  component: MultiStep,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'row',
            gap: '$2',
          }}
        >
          {<Story />}
        </Box>
      )
    },
  ],
}

export default meta

type Story = StoryObj<MultiStepProps>

export const Primary: Story = {
  args: {
    size: 4,
    currentStep: 1,
  },
}

export const Full: Story = {
  args: {
    size: 4,
    currentStep: 4,
  },
}
