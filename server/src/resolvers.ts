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
  Mutation: {
    incrementTrackViews: async (_parent, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: "Track views incremented",
          track,
        };
      } catch (error) {
        return {
          code: error.extensions.response.status,
          success: false,
          message: error.extensions.response.body,
          track: null,
        };
      }
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
