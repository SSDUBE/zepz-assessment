import { syncActivities } from '../mutation/syncActivity';
import { activities } from '../query/activities'

const resolvers = {
  Query: { activities },
  Mutation: { syncActivities }
};

export default resolvers;
