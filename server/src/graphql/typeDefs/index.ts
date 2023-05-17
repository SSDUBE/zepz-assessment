import { syncActivitiesMutation } from '../mutation/syncActivity';
import { activitiesQuery } from '../query/activities';

const typeDefs = [
  // graphql query
  activitiesQuery,
  // graphql mutation
  syncActivitiesMutation
];

export default typeDefs;
