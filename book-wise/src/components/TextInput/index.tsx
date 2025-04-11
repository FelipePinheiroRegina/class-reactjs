import { ComponentProps, ElementType } from 'react'
import { Input, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  icon?: ElementType
}

export function TextInput({ icon: Icon, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      <Input {...props} />
      {!!Icon && <Icon />}
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
