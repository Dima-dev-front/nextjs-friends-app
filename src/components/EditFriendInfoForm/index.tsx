'use client';

import { Friend } from '@/types/Friend';
import { Button } from '../common/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../common/Input';
import { InputGroup } from '../common/InputGroup';
import { FormFieldError } from '../common/FormFieldError';
import { format, parse } from 'date-fns';
import { useFriendsStore } from '@/stores/friendsStore';
import { useRouter } from 'next/navigation';
import type { FC } from 'react';
import type { UpdateFriendInfoFormData } from '@/types/UpdateFriendInfoFormData';
import { InvitationStatus } from '@/types/InvitationStatus';

type Props = {
  friend: Friend;
};

export const EditFriendInfoForm: FC<Props> = ({
  friend: { id, fullName, joinedOn, avatarSrc, invitationStatus },
}) => {
  const router = useRouter();
  const { setFriends, friends } = useFriendsStore((state) => state);
  const parsedJoinedDate = joinedOn
    ? parse(joinedOn, 'dd/MM/yyyy', new Date())
    : null;
  const reformattedDate = parsedJoinedDate
    ? format(parsedJoinedDate, 'yyyy-MM-dd')
    : undefined;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateFriendInfoFormData>({
    defaultValues: {
      fullName,
      joinedOn: reformattedDate,
      avatar: avatarSrc,
    },
  });

  const onSubmit: SubmitHandler<UpdateFriendInfoFormData> = (data) => {
    let newAvatarSrc = avatarSrc;

    if (typeof data.avatar === 'object' && data.avatar?.length) {
      newAvatarSrc = URL.createObjectURL(data.avatar[0]);
    }

    const updatedFriends = friends.map((friend) => {
      if (friend.id === id) {
        return {
          ...friend,
          fullName: data.fullName,
          joinedOn: data.joinedOn
            ? format(data.joinedOn, 'dd/MM/yyyy')
            : undefined,
          avatarSrc: newAvatarSrc,
        };
      }

      return friend;
    });

    setFriends(updatedFriends);

    router.push('/friends');
  };

  return (
    <form
      action='GET'
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-6'
    >
      <InputGroup>
        <label htmlFor='fullName'>Full name:</label>
        <Input
          id='fullName'
          defaultValue={fullName}
          {...register('fullName', { required: true })}
        />
        <FormFieldError error={errors.fullName} />
      </InputGroup>
      {invitationStatus === InvitationStatus.Joined && (
        <InputGroup>
          <label htmlFor='joinedOn'>Joined date:</label>
          <Input
            id='joinedOn'
            type='date'
            defaultValue={reformattedDate}
            {...register('joinedOn', { required: true })}
          />
          <FormFieldError error={errors.joinedOn} />
        </InputGroup>
      )}
      <InputGroup>
        <label htmlFor='avatar'>Choose avatar:</label>
        <Input id='avatar' type='file' {...register('avatar')} />
        <FormFieldError error={errors.avatar} />
      </InputGroup>
      <Button type='submit' disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};
