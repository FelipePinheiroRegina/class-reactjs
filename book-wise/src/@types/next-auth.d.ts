import 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    name: string
    email: string
    image: string
  }

  interface Session {
    user: User
  }
}
