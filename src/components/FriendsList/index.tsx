'use client';

import type { FC } from 'react';
import type { Friend } from '@/types/Friend';
import { FriendCard } from '../FriendCard';
import { useSearchParams } from 'next/navigation';

type Props = {
  friends: Friend[];
};

export const FriendsList: FC<Props> = ({ friends }) => {
  const searchParams = useSearchParams();

  const filteredFriends = friends.filter((friend) => {
    const searchQuery = searchParams.get('query');

    if (!searchQuery) return true;

    return friend.fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <ul
      className='grid list-none
        grid-cols-[repeat(auto-fill,_minmax(187px,_1fr))]
        grid-rows-[auto] gap-4'
    >
      {filteredFriends.map((friend) => (
        <li key={friend.id}>
          <FriendCard friend={friend} />
        </li>
      ))}
    </ul>
  );
};
