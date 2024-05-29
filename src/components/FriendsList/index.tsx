'use client';

import { useEffect, type FC } from 'react';
import type { Friend } from '@/types/Friend';
import { FriendCard } from '../FriendCard';
import { useSearchParams } from 'next/navigation';
import { useFriendsStore } from '@/stores/friendsStore';

type Props = {
  friendsFromServer: Friend[];
};

export const FriendsList: FC<Props> = ({ friendsFromServer }) => {
  const searchParams = useSearchParams();
  const { setFriends, friends } = useFriendsStore((state) => state);

  const filteredFriends = (friends.length ? friends : friendsFromServer).filter(
    (friend) => {
      const searchQuery = searchParams.get('query');

      if (!searchQuery) return true;

      return friend.fullName.toLowerCase().includes(searchQuery.toLowerCase());
    },
  );

  useEffect(() => {
    if (!friends.length) {
      setFriends(friendsFromServer);
    }
  }, [friendsFromServer]);

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
