import { BackLink } from '@/components/common/BackLink';
import { notFound } from 'next/navigation';
import { getFriendsData } from '@/app/services/getFriendsData';
import { EditFriendInfo } from '@/components/EditFriendInfo';
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
    title: `${foundFriend.fullName} - Edit`,
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
        <EditFriendInfo friendFromServer={foundFriend} />
      </div>
    </div>
  );
};

export default PermissionsPage;
