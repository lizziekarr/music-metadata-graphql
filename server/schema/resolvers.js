const { TrackList } = require("../data");
const _ = require("lodash");

const resolvers = {
  Query: {
    // TRACK RESOLVERS
    tracks: () => {
      return TrackList;
    },
    track: (parent, args) => {
      const id = args.id;
      const track = _.find(TrackList, { id: Number(id) });
      return track;
    }
  }
};

module.exports = { resolvers };
