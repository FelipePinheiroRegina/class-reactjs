import { Avatar } from '@/components/Avatar'
import { ReviewContainer, Header } from './styles'
import { Text } from '@/components/Text'
import { Rating } from '@/components/Rating'

export function Review() {
  return (
    <ReviewContainer variant="secondary">
      <Header>
        <div>
          <Avatar
            size="small"
            src="https://github.com/FelipePinheiroRegina.png"
            alt="Felipe Pinheiro"
          />
          <div>
            <Text as="strong">Felipe Pinheiro</Text>
            <Text as="time" size="sm">
              2 day ago
            </Text>
          </div>
        </div>
        <Rating value={4} disabled />
      </Header>
      <Text size="sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione eaque
        ipsum adipisci quo iusto pariatur accusantium tenetur architecto
        praesentium corporis animi exercitationem eveniet et, ipsa consequatur
        fuga optio, cupiditate nam. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Ipsa dolor, voluptas distinctio cumque sed eaque
        ratione repellendus nostrum, delectus minima maxime. Saepe totam ad
        accusamus nihil cupiditate esse quidem non!
      </Text>
    </ReviewContainer>
  )
}
