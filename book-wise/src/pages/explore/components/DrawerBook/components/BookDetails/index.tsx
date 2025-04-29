import {
  BookDetailsContainer,
  CategoriesPagesContainer,
  CategoryContainer,
  ImageTitleRatingContainer,
  PagesContainer,
  RatingContainer,
  TitleContainer,
  TitleRatingContainer,
} from './styles'
import { Rating } from '@/components/Rating'
import { Heading } from '@chakra-ui/react'
import { Text } from '@/components/Text'
import Image from 'next/image'
import { BookmarkSimple, BookOpen } from '@phosphor-icons/react'
import { ApiResponseGetBookById } from '@/api/get-book-by-id'

interface BookDetailsProps {
  props: ApiResponseGetBookById
}

export function BookDetails({ props }: BookDetailsProps) {
  return (
    <BookDetailsContainer variant="secondary">
      <ImageTitleRatingContainer>
        <Image
          src={props.cover_url}
          height={242}
          width={171}
          alt="Image book hobbit"
        />

        <TitleRatingContainer>
          <TitleContainer className="gap-8">
            <Heading size="lg">{props.name}</Heading>
            <Text size="sm">{props.author}</Text>
          </TitleContainer>

          <RatingContainer className="gap-8">
            <Rating value={props.rate} size="md" disabled />
            <Text size="sm">{props.ratings.length} reviews</Text>
          </RatingContainer>
        </TitleRatingContainer>
      </ImageTitleRatingContainer>

      <CategoriesPagesContainer>
        <CategoryContainer>
          <BookmarkSimple />
          <div>
            <Text size="sm">Category</Text>
            <div>
              {props.categories.map((category, index) => (
                <Text as="strong" key={category}>
                  {category}
                  {index < props.categories.length - 1 ? ', ' : ''}
                </Text>
              ))}
            </div>
          </div>
        </CategoryContainer>
        <PagesContainer>
          <BookOpen />
          <div>
            <Text size="sm">Pages</Text>
            <Text as="strong">{props.total_pages}</Text>
          </div>
        </PagesContainer>
      </CategoriesPagesContainer>
    </BookDetailsContainer>
  )
}
