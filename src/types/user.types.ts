export interface User {
  sub: string
  name: string
  given_name: string
  family_name: string
  picture: string
  email: string
  email_verified: boolean
  locale: string
}

export interface Auth {
  accessToken: string | null
  user: User | null
}
