/* eslint-disable @next/next/no-img-element */
import type { Friend } from '@/types/Friend';
import type { ComponentProps, FC } from 'react';
import { InvitationStatus } from '@/types/InvitationStatus';
import cn from 'classnames';
import Link from 'next/link';

type Props = {
  friend: Friend;
  showEditLink?: boolean;
} & ComponentProps<'div'>;

export const FriendCard: FC<Props> = ({
  friend: { id, avatarSrc, invitationStatus, fullName, ...friend },
  showEditLink = true,
  className = '',
}) => (
  <div
    className={cn(
      'relative flex flex-col rounded-lg bg-white px-[14px] pb-[14px] pt-[18px]',
      className,
    )}
  >
    <img
      src={avatarSrc}
      alt="friend's avatar"
      width={80}
      height={80}
      className='max-h-20 max-w-20 self-center rounded-[100px]'
    />
    <div
      className={cn('text-center capitalize', {
        'bg-indigo100 text-social mb-[14px] mt-[10px] w-fit self-center rounded-md px-3 pt-[2px] text-sm font-medium':
          invitationStatus === InvitationStatus.Pending,
        'mb-[14px] mt-4 text-xs font-light text-[#37415199]':
          invitationStatus === InvitationStatus.Joined,
      })}
    >
      {friend.joinedOn ? `Joined on ${friend.joinedOn}` : invitationStatus}
    </div>
    <div
      className='text-nightblue mt-auto overflow-hidden text-ellipsis
        whitespace-nowrap text-center text-[18px] font-semibold'
    >
      {fullName}
    </div>
    {showEditLink && (
      <Link
        href={`/friends/edit/${id}`}
        className='bg-darkblue mt-[10px] whitespace-nowrap rounded-lg border-none px-6 py-[14px]
          text-center font-medium text-white transition-opacity hover:opacity-80'
      >
        Edit Info
      </Link>
    )}
  </div>
);
