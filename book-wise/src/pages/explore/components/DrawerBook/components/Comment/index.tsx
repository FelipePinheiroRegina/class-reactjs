import { Avatar } from '@/components/Avatar'
import { CommentContainer, Header, Form } from './styles'
import { TextArea } from '@/components/TextArea'
import { Rating } from '@/components/Rating'
import { Button } from '@/components/Button'
import { useState } from 'react'
import { Text } from '@/components/Text'
import { Check, X } from '@phosphor-icons/react'

export function Comment() {
  const [reviewDescription, setReviewDescription] = useState('')
  return (
    <CommentContainer variant="secondary">
      <Header>
        <div>
          <Avatar
            size="small"
            src="http://github.com/FelipePinheiroRegina.png"
            alt="Image felipe"
          />
          <Text as="strong">Felipe Pinheiro</Text>
        </div>

        <Rating value={0} size="lg" />
      </Header>

      <Form>
        <TextArea
          placeholder="Write your review"
          value={reviewDescription}
          maxLength={450}
          onChange={(e) => setReviewDescription(e.target.value)}
        />
        <div>
          <Button>
            <X color="#8381D9" />
          </Button>
          <Button>
            <Check color="#50B2C0" />
          </Button>
        </div>
      </Form>
    </CommentContainer>
  )
}
