import { ColorPalette, ColorItem } from '@storybook/blocks'
import { colors } from '@ignite-ui/tokens'

export function ColorsGrid() {
  return (
    <ColorPalette>
      {Object.entries(colors).map(([key, color]) => (
        <ColorItem
          key={key}
          title={key}
          subtitle={color}
          colors={{ [key]: color }}
        />
      ))}
    </ColorPalette>
  )
}
