import { ApolloError, gql } from 'apollo-server-express';
import { ActivityModel } from '../../models/activity';

export const activitiesQuery = gql`
  type Activity {
    activity: String
    type: String
    participants: Int
    price: Float
    link: String
    key: String
    accessibility: Float
  }

  type Query {
    activities(type: String): [Activity]
  }
`;

export const activities = async (_parent: any, args: { type: string }) => {
  try {
    const { type } = args;
    let query = ActivityModel.find();

    if (type) {
      query = query.where('type', type).sort({ _id: -1 });
    }

    const activities = await query.exec();

    return activities;
  } catch (error: any) {
    throw new ApolloError(error.message);
  }
};
