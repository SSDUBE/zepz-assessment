import { FunctionComponent } from 'react';

const cardKeys = {
  accessibility: 'Accessibility:',
  activity: 'Activity:',
  key: 'Key:',
  link: 'Link:',
  participants: 'Participants:',
  price: 'Price:',
  type: 'Type:',
};

export const ActivityCard: FunctionComponent<any> = ({ activity }) => {
  return (
    <div className='col-span-1 p-8 border rounded-lg dark:bg-gray-800 dark:border-gray-700'>
      {Object.keys(cardKeys).map((key) => {
        return (
          <div className='flex justify-start justify-between' key={key}>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              {cardKeys[key as keyof typeof cardKeys]}
            </p>
            <p className='font-normal text-gray-700 dark:text-gray-400 place-self-end'>
              {activity[key as keyof typeof activity]}
            </p>
          </div>
        );
      })}
    </div>
  );
};
