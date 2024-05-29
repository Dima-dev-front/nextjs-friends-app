'use client';

import { useFriendsStore } from '@/stores/friendsStore';
import { FriendCard } from '../FriendCard';
import { EditFriendInfoForm } from '../EditFriendInfoForm';
import type { Friend } from '@/types/Friend';
import { useEffect, type FC } from 'react';

type Props = {
  friendFromServer: Friend;
};

export const EditFriendInfo: FC<Props> = ({ friendFromServer }) => {
  const friends = useFriendsStore((state) => state.friends);
  const friend =
    friends.find((friend) => friend.id === friendFromServer.id) ||
    friendFromServer;

  useEffect(() => {
    if (friend.fullName !== friendFromServer.fullName) {
      document.title = `${friend.fullName} - Edit`;
    }
  }, [friend, friendFromServer]);

  return (
    <>
      <h1
        className='text-gray700 mb-6 overflow-hidden text-ellipsis break-words
      text-[32px] font-extrabold min-[500px]:text-[36px] min-[640px]:text-[40px] md:text-5xl'
      >
        {friend.fullName} - Edit
      </h1>
      <div className='text-gray500 mb-8 text-[20px] min-[550px]:text-[22px] lg:text-2xl'>
        Edit {friend.fullName}&apos;s Info
      </div>
      <div className='flex flex-col justify-center gap-[30px] min-[530px]:flex-row'>
        <FriendCard
          friend={friend}
          className='mr-0 h-fit w-fit self-center min-[530px]:w-[170px]
        min-[530px]:self-start min-[1100px]:mr-[50px]'
          showEditLink={false}
        />
        <EditFriendInfoForm friend={friend} />
      </div>
    </>
  );
};
