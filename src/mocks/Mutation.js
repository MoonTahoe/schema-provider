import { MockList } from 'apollo-server'
import { currentUser } from './currentUser'

export const Mutation = () => ({
  register: (_, { email, password }) => currentUser,
  verifyAccount: (_, { email, password }) => currentUser
})
