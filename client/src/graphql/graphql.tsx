import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Activity = {
  __typename?: 'Activity';
  accessibility?: Maybe<Scalars['Float']>;
  activity?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  participants?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  syncActivities: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  activities?: Maybe<Array<Maybe<Activity>>>;
};


export type QueryActivitiesArgs = {
  type?: InputMaybe<Scalars['String']>;
};

export type SyncActivitiesMutationVariables = Exact<{ [key: string]: never; }>;


export type SyncActivitiesMutation = { __typename?: 'Mutation', syncActivities: string };

export type ActivitiesQueryVariables = Exact<{
  type?: InputMaybe<Scalars['String']>;
}>;


export type ActivitiesQuery = { __typename?: 'Query', activities?: Array<{ __typename?: 'Activity', activity?: string | null, type?: string | null, participants?: number | null, price?: number | null, link?: string | null, key?: string | null, accessibility?: number | null } | null> | null };


export const SyncActivitiesDocument = gql`
    mutation syncActivities {
  syncActivities
}
    `;
export type SyncActivitiesMutationFn = Apollo.MutationFunction<SyncActivitiesMutation, SyncActivitiesMutationVariables>;

/**
 * __useSyncActivitiesMutation__
 *
 * To run a mutation, you first call `useSyncActivitiesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSyncActivitiesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [syncActivitiesMutation, { data, loading, error }] = useSyncActivitiesMutation({
 *   variables: {
 *   },
 * });
 */
export function useSyncActivitiesMutation(baseOptions?: Apollo.MutationHookOptions<SyncActivitiesMutation, SyncActivitiesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SyncActivitiesMutation, SyncActivitiesMutationVariables>(SyncActivitiesDocument, options);
      }
export type SyncActivitiesMutationHookResult = ReturnType<typeof useSyncActivitiesMutation>;
export type SyncActivitiesMutationResult = Apollo.MutationResult<SyncActivitiesMutation>;
export type SyncActivitiesMutationOptions = Apollo.BaseMutationOptions<SyncActivitiesMutation, SyncActivitiesMutationVariables>;
export const ActivitiesDocument = gql`
    query activities($type: String) {
  activities(type: $type) {
    activity
    type
    participants
    price
    link
    key
    accessibility
  }
}
    `;

/**
 * __useActivitiesQuery__
 *
 * To run a query within a React component, call `useActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivitiesQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useActivitiesQuery(baseOptions?: Apollo.QueryHookOptions<ActivitiesQuery, ActivitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActivitiesQuery, ActivitiesQueryVariables>(ActivitiesDocument, options);
      }
export function useActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivitiesQuery, ActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActivitiesQuery, ActivitiesQueryVariables>(ActivitiesDocument, options);
        }
export type ActivitiesQueryHookResult = ReturnType<typeof useActivitiesQuery>;
export type ActivitiesLazyQueryHookResult = ReturnType<typeof useActivitiesLazyQuery>;
export type ActivitiesQueryResult = Apollo.QueryResult<ActivitiesQuery, ActivitiesQueryVariables>;