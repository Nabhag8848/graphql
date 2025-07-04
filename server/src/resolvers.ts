import { Resolvers } from "./__generated__/types";

export const resolvers: Resolvers = {
  Query: {
    tracksForHome: (_parent, _args, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    track: (_parent, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },
  Track: {
    author: ({ authorId }, _args, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _args, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};
