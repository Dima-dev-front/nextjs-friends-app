import Link from 'next/link';

export const InviteSomeoneCard = () => (
  <div
    className='col-end-[-1] row-start-1 flex flex-col items-center
      rounded-lg bg-white px-[14px] pb-[14px] pt-[18px]'
  >
    <div
      className='bg-gray200 text-gray300 mb-6 flex h-20 w-20 items-center
        justify-center rounded-[100px] text-center text-6xl font-semibold'
    >
      ?
    </div>
    <div className='mb-6 text-center text-xs font-light text-[#37415199]'>
      Invite someone now.
    </div>
    <Link
      href='/family/invite'
      className='bg-pink600 mt-auto flex w-full items-center justify-center rounded-lg
        px-6 py-[14px] font-medium text-white transition-opacity hover:opacity-80'
    >
      Invite someone
    </Link>
  </div>
);
