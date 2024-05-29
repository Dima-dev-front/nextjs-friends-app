import { FriendCard } from '@/components/FriendCard';
import { BackLink } from '@/components/common/BackLink';
import { notFound } from 'next/navigation';
import { getFriendsData } from '@/app/services/getFriendsData';
import { UpdateFriendInfoForm } from '@/components/UpdateFriendInfoForm';
import type { FC } from 'react';
import type { Metadata } from 'next';

type Props = {
  params: { friendId: string };
};
export const generateStaticParams = async (): Promise<
  { friendId: string }[]
> => {
  const { friends } = await getFriendsData();

  return friends.map(({ id }) => ({
    friendId: id.toString(),
  }));
};

export const generateMetadata = async ({
  params: { friendId },
}: Props): Promise<Metadata> => {
  const { friends } = await getFriendsData();
  const foundFriend = friends.find((friend) => friend.id === +friendId);

  if (!foundFriend) {
    notFound();
  }

  return {
    title: `${foundFriend.fullName} | Edit`,
  };
};

const PermissionsPage: FC<Props> = async ({ params: { friendId } }) => {
  const { friends } = await getFriendsData();
  const foundFriend = friends.find((friend) => friend.id === +friendId);

  if (!foundFriend) {
    notFound();
  }

  return (
    <div
      className='bg-gray100 flex min-h-screen flex-1 justify-center px-4 py-8
        md:px-8 md:py-12 lg:px-12 lg:py-16'
    >
      <div className='mx-auto w-full max-w-[1400px]'>
        <BackLink className='mb-10'>{'<-- Back to Previous Page'}</BackLink>
        <h1
          className='text-gray700 mb-6 overflow-hidden text-ellipsis break-words
            text-[32px] font-extrabold min-[500px]:text-[36px] min-[640px]:text-[40px] md:text-5xl'
        >
          {foundFriend.fullName} - Edit
        </h1>
        <div className='text-gray500 mb-8 text-[20px] min-[550px]:text-[22px] lg:text-2xl'>
          Edit {foundFriend.fullName}&apos;s Info
        </div>
        <div className='flex flex-col justify-center gap-[30px] min-[530px]:flex-row'>
          <FriendCard
            friend={foundFriend}
            className='mr-0 h-fit w-fit self-center min-[530px]:w-[170px]
              min-[530px]:self-start min-[1100px]:mr-[50px]'
            showEditLink={false}
          />
          <UpdateFriendInfoForm friend={foundFriend} />
        </div>
      </div>
    </div>
  );
};

export default PermissionsPage;
