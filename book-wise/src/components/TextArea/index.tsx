import { TextareaHTMLAttributes } from 'react'
import {
  TextAreaContainer,
  TextAreaStyled,
  TextAreaLetterCounter,
} from './styles'

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <TextAreaContainer>
      <TextAreaStyled {...props} />
      {props.maxLength && (
        <TextAreaLetterCounter>
          {props.value?.toString().length} / {props.maxLength}
        </TextAreaLetterCounter>
      )}
    </TextAreaContainer>
  )
}

TextArea.displayName = 'TextArea'
