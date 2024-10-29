export interface Content {
    key: 'paragraph' | 'link' | 'hash'
    content: string
  }

export interface PropsPosts {
    id: number,
    name: string,
    role: string, 
    avatar: string,
    created_at: string, 
    content: Content[]
}
  
export const posts: PropsPosts[] = [
    {
        id: 1,
        name: 'Felipe Pinheiro',
        role: 'Web Developer',
        avatar: 'https://github.com/FelipePinheiroRegina.png',
        created_at: '2024-10-26T00:12:00Z',
        content: [
        { key: 'paragraph', content: 'Fala galeraa 👋' },
        { key: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { key: 'link', content: 'jane.design/doctorcare' },
        { key: 'hash', content: 'rocketseat' },
        { key: 'hash', content: 'novoprojeto' },
        { key: 'hash', content: 'nlw' },
        ]
    },
    {
        id: 2,
        name: 'Richard Pinheiro',
        role: 'Software Engineer',
        avatar: 'https://avatars.githubusercontent.com/u/14030595?v=4',
        created_at: '2024-10-25T00:09:00Z',
        content: [
        { key: 'paragraph', content: 'Ola pessoal' },
        { key: 'paragraph', content: 'Fiz uma api em nodejs + fastify + typescript, confiram no meu github🚀' },
        { key: 'link', content: 'https://github.com/RichardPinheiro' },
        { key: 'hash', content: 'node' },
        { key: 'hash', content: 'fastify' },
        { key: 'hash', content: 'typescript' },
        ]
    }
]