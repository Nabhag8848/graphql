export const resolvers = {
  Query: {
    tracksForHome: (_parent, _args, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, _args, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};
