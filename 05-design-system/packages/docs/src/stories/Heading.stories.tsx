import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

const meta: Meta<HeadingProps> = {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: <> Custom Heading </>,
  },
}

export default meta

type Story = StoryObj<HeadingProps>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    as: 'h1',
    children: 'H1 Custom Heading',
  },
  parameters: {
    docs: {
      description: {
        story: {
          'Per default Heading is `h2` element, but you can change this set of the property `as` with element html example.: a `h1`'
        },
      }
      
    },
  },
}
