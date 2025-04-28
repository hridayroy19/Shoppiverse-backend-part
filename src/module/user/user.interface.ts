export interface IUser {
  name: string
  email: string
  password: string
  role: 'user' | 'admin'
  photo: string
  wishlist:string[]
  address: string
  userStatus: 'active' | 'inactive'
}
