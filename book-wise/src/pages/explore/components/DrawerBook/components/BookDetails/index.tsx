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
import imageHobbitBook from '@/assets/books/o-hobbit.png'
import { Rating } from '@/components/Rating'
import { Heading } from '@chakra-ui/react'
import { Text } from '@/components/Text'
import Image from 'next/image'
import { BookmarkSimple, BookOpen } from '@phosphor-icons/react'

export function BookDetails() {
  return (
    <BookDetailsContainer variant="secondary">
      <ImageTitleRatingContainer>
        <Image
          src={imageHobbitBook}
          height={242}
          width={171}
          alt="Image book hobbit"
        />

        <TitleRatingContainer>
          <TitleContainer className="gap-8">
            <Heading size="lg">The Hobbit</Heading>
            <Text size="sm">J.R.R. Tolkien</Text>
          </TitleContainer>

          <RatingContainer className="gap-8">
            <Rating value={4} size="md" disabled />
            <Text size="sm">3 reviews</Text>
          </RatingContainer>
        </TitleRatingContainer>
      </ImageTitleRatingContainer>

      <CategoriesPagesContainer>
        <CategoryContainer>
          <BookmarkSimple />
          <div>
            <Text size="sm">Category</Text>
            <Text as="strong">Computing, Education</Text>
          </div>
        </CategoryContainer>
        <PagesContainer>
          <BookOpen />
          <div>
            <Text size="sm">Pages</Text>
            <Text as="strong">160</Text>
          </div>
        </PagesContainer>
      </CategoriesPagesContainer>
    </BookDetailsContainer>
  )
}
