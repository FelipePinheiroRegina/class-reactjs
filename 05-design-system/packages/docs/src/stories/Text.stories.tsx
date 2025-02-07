import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

const meta: Meta<TextProps> = {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis
        aspernatur cumque reprehenderit quas, sed quae voluptatem impedit harum,
        autem ratione qui dolorum. A autem exercitationem quaerat blanditiis
        odio ut.
      </>
    ),
  },
}

export default meta

type Story = StoryObj<TextProps>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    as: 'strong',
  },
}
