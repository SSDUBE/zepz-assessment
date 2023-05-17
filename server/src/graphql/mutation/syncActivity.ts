import { ApolloError, gql } from 'apollo-server-express';
import axios, { AxiosResponse } from 'axios';
import { ActivityModel } from '../../models/activity';

export const syncActivitiesMutation = gql`
  type Mutation {
    syncActivities: String!
  }
`;

export const syncActivities = async (_parent: any, _args: any) => {
  try {
    const activitiesPromises: Promise<AxiosResponse<any, any>>[] = [];
    const activityUpdatePromises: Promise<any>[] = [];

    for (let i = 0; i < 20; i++) {
      activitiesPromises.push(axios.get('https://boredapi.com/api/activity'));
    }

    const results = await Promise.all(activitiesPromises);

    for (const activity of results) {
      if (activity.data.error) {
        throw new ApolloError(activity.data.error);
      }

      activityUpdatePromises.push(
        ActivityModel.findOneAndUpdate(
          { key: activity.data.key },
          activity.data,
          { upsert: true, new: true }
        )
      );
    }

    await Promise.all(activityUpdatePromises);
    return 'Successfully synced activities!';
  } catch (error: any) {
    throw new ApolloError(error.message);
  }
};
