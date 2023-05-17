import React from 'react';
import { HashLoader } from 'react-spinners';
import { Button } from '../components/Button';
import { ActivityCard } from '../components/activityCard';
import {
  useActivitiesQuery,
  useSyncActivitiesMutation,
} from '../graphql/graphql';
import Swal from 'sweetalert2';

export const Activities = () => {
  const [typeInput, setTypeInput] = React.useState<string>('');

  const {
    data: activitiesData,
    loading: activitiesLoading,
    error: activitiesError,
    refetch,
  } = useActivitiesQuery();

  const [syncActivities, { loading: syncLoading, error: syncError }] =
    useSyncActivitiesMutation();

  async function handleSyncActivities() {
    await syncActivities();

    if (syncError) {
      return Swal.fire('Oops...', 'Failed to sync activities!', 'error');
    }

    Swal.fire('Successfull!', 'Activities successfully synced.', 'success');
  }

  async function handleRefetchActivities() {
    const regex = /^\s*$/;

    if (typeInput.length && regex.test(typeInput)) {
      return Swal.fire(
        'Oops...',
        'Activity type cannot be empty characters!',
        'error'
      );
    }

    await refetch({ type: typeInput });

    Swal.fire('Hooray!!!', 'Activities successfully fetched.', 'success');
  }

  if (activitiesError) {
    Swal.fire('Oops...', 'Failed to sync activities!', 'error');
    return <></>;
  }

  return (
    <div className='container mx-auto max-md:px-4 mt-10 mb-15'>
      {activitiesLoading ? (
        <div className='grid h-screen place-items-center'>
          <div className='flex justify-start justify-center items-center'>
            <HashLoader color='#36d7b7' />
            <p className='font-normal ml-5 text-gray-700 dark:text-gray-400'>
              Loading...
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className='grid mb-10 gap-4 grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2'>
            <input
              disabled={syncLoading || activitiesLoading}
              type='text'
              id='first_name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Enter Activity Type'
              onChange={(e) => setTypeInput(e.target.value)}
            />
            <Button
              loading={activitiesLoading}
              title='Query Activities'
              handleClick={handleRefetchActivities}
            />
            <Button
              loading={syncLoading}
              title='Sync Activities'
              handleClick={handleSyncActivities}
            />
          </div>
          <div className='grid gap-4 grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2'>
            {activitiesData!.activities?.length ? (
              activitiesData!.activities!.map((activity) => (
                <ActivityCard key={activity?.key} activity={activity} />
              ))
            ) : (
              <p className='text-lg text-[20px]'>
                Could not find any activities
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};
