import { MockList } from 'apollo-server'

export const Query = () => ({
  me: (_, args, { currentUser }) => currentUser,
  allNews: (_, args) =>
    new MockList(args && args.count ? args.count : [50, 100]),
  currentDonationOptions: () => new MockList(5)
})
