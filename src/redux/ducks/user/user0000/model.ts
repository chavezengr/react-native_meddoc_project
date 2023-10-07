export type User0000Type = {
  username: string
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
  userStatus: string
}

export type User0000StateType = {
  data: User0000Type | null
  isLoading: boolean
  errors: string
}

export interface IUsers0000StateType {
  user: User0000StateType
}

export const initialState: IUsers0000StateType = {
  user: {
    data: null,
    isLoading: false,
    errors: '',
  },
}
