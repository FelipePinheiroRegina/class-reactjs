import { NextSeo } from 'next-seo'
import { ExploreContainer, Content, Header, Books, Categories } from './styles'
import { Nav } from '@/components/Nav'
import { Heading } from '@/components/Heading'
import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'
import { TextInput } from '@/components/TextInput'
import { Tag } from '@/components/Tag'
import { Book } from '@/components/Book'
import { DrawerBook } from './components/DrawerBook'
import { useState } from 'react'
import { DrawerOpenChangeDetails } from '@chakra-ui/react'

export default function Explore() {
  const [openDrawerBook, setOpenDrawerBook] = useState<DrawerOpenChangeDetails>(
    { open: false },
  )

  const handleOpenChange = (value: DrawerOpenChangeDetails) => {
    setOpenDrawerBook({ open: value.open })
  }

  return (
    <>
      <NextSeo title="Explore | BookWise" />

      <DrawerBook open={openDrawerBook.open} onOpenChange={handleOpenChange} />

      <ExploreContainer>
        <Nav />
        <Content>
          <Header>
            <Heading size="2xl">
              <Binoculars /> Explore
            </Heading>
            <div className="input-container">
              <TextInput
                placeholder="search for book or author"
                icon={MagnifyingGlass}
              />
            </div>
          </Header>
          <Categories>
            <Tag>All</Tag>
            <Tag data-checked>Computing</Tag>
            <Tag data-checked>Education</Tag>
            <Tag>Fantasy</Tag>
            <Tag>Science fiction</Tag>
            <Tag>Horror</Tag>
            <Tag>HQs</Tag>
            <Tag>Suspense</Tag>
          </Categories>
          <Books>
            <Book
              imageSize="large"
              onClick={() => handleOpenChange({ open: true })}
            />
            <Book imageSize="large" />
            <Book imageSize="large" />
            <Book imageSize="large" />
            <Book imageSize="large" />
            <Book imageSize="large" />
            <Book imageSize="large" />
            <Book imageSize="large" />
            <Book imageSize="large" />
            <Book imageSize="large" />
            <Book imageSize="large" />
            <Book imageSize="large" />
            <Book imageSize="large" />
            <Book imageSize="large" />
            <Book imageSize="large" />
          </Books>
        </Content>
      </ExploreContainer>
    </>
  )
}
